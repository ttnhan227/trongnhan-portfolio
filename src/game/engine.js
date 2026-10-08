import {
  BUILDINGS,
  PALETTE,
  TILE,
  ROOM_NAMES,
  createScene,
  blocked,
  findPath,
  spawn,
} from "./world";
import {pixelText} from './pixelText';

const rgb = PALETTE.map((c) => [
  parseInt(c.slice(1, 3), 16),
  parseInt(c.slice(3, 5), 16),
  parseInt(c.slice(5, 7), 16),
]);
async function atlas(src) {
  const image = new Image();
  image.src = src;
  await image.decode();
  const c = document.createElement("canvas");
  c.width = image.width;
  c.height = image.height;
  const ctx = c.getContext("2d", { willReadFrequently: true });
  ctx.drawImage(image, 0, 0);
  const data = ctx.getImageData(0, 0, c.width, c.height),
    cache = new Map();
  for (let i = 0; i < data.data.length; i += 4) {
    if (!data.data[i + 3]) continue;
    const k = (data.data[i] << 16) | (data.data[i + 1] << 8) | data.data[i + 2];
    let p = cache.get(k);
    if (!p) {
      let best = Infinity;
      for (const color of rgb) {
        const d =
          (color[0] - data.data[i]) ** 2 +
          (color[1] - data.data[i + 1]) ** 2 +
          (color[2] - data.data[i + 2]) ** 2;
        if (d < best) {
          best = d;
          p = color;
        }
      }
      cache.set(k, p);
    }
    data.data[i] = p[0];
    data.data[i + 1] = p[1];
    data.data[i + 2] = p[2];
  }
  ctx.putImageData(data, 0, 0);
  return c;
}
// Original 16px character: direction, walk frame, and face expression are explicit.
export function drawAvatar(
  ctx,
  x,
  y,
  direction = "down",
  frame = 0,
  expression = "neutral",
) {
  const rect = (color, rx, ry, w, h) => {
    ctx.fillStyle = PALETTE[color];
    ctx.fillRect(Math.round(x) + rx, Math.round(y) + ry, w, h);
  };
  rect(0, 3, -15, 10, 14);
  rect(11, 5, -14, 6, 5);
  rect(21, 5, -12, 6, 5);
  rect(14, 4, -16, 8, 4);
  rect(14, 3, -14, 2, 5);
  rect(17, 4, -7, 8, 6);
  rect(18, 5, -7, 2, 5);
  rect(11, 11, -6, 3, 5);
  rect(10, 12, -5, 2, 3);
  const stride = frame === 1 ? 1 : frame === 3 ? -1 : 0;
  rect(15, 5, -1, 3, 2 + stride);
  rect(15, 9, -1, 3, 2 - stride);
  rect(11, 3, -5 + (frame === 1 ? 1 : 0), 1, 3);
  rect(11, 12, -5 - (frame === 3 ? 1 : 0), 1, 3);
  if (direction === "up") {
    rect(14, 4, -13, 8, 7);
    rect(16, 5, -6, 6, 4);
    rect(11, 7, -5, 5, 3);
  } else if (direction === "left") {
    rect(0, 5, -10, 1, 1);
    rect(14, 10, -13, 2, 6);
    rect(23, 4, -8, 2, 1);
  } else if (direction === "right") {
    rect(0, 10, -10, 1, 1);
    rect(14, 4, -13, 2, 6);
    rect(23, 10, -8, 2, 1);
  } else {
    rect(0, 6, -10, 1, 1);
    rect(0, 10, -10, 1, 1);
    rect(23, 8, -8, 2, expression === "smile" ? 1 : 0);
    if (expression === "thinking") {
      rect(14, 6, -12, 2, 1);
    }
  }
}
function drawCat(ctx, x, y, t) {
  const r = (c, a, b, w, h) => {
    ctx.fillStyle = PALETTE[c];
    ctx.fillRect(Math.round(x) + a, Math.round(y) + b, w, h);
  };
  r(13, -5, -5, 11, 6);
  r(9, -4, -4, 9, 4);
  r(13, -4, -9, 7, 5);
  r(13, -4, -11, 2, 3);
  r(13, 1, -11, 2, 3);
  r(9, -3, -8, 5, 3);
  r(0, -2, -7, 1, 1);
  r(0, 1, -7, 1, 1);
  r(13, 5, -7 + (Math.sin(t * 3) > 0 ? 1 : 0), 3, 2);
  r(13, -3, 1, 2, 1);
  r(13, 3, 1, 2, 1);
}
export class VillageEngine {
  constructor(canvas, events = {}, save = null) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.events = events;
    this.scene = createScene(
      save?.scene in ROOM_NAMES ? save.scene : "village",
    );
    this.player = { ...(save?.position || spawn), direction: "down", frame: 0 };
    if (blocked(this.scene, this.player.x, this.player.y))
      this.player = { ...spawn, direction: "down", frame: 0 };
    this.camera = { x: 0, y: 0 };
    this.keys = new Set();
    this.path = [];
    this.particles = [];
    this.cat = { x: this.player.x - 16, y: this.player.y };
    this.time = 0;
    this.step = 0;
    this.paused = false;
    this.night = null;
    this.destroyed = false;
    this.ready = false;
    this.transition = 0;
    this.lastState = 0;
    this.near = null;
    this.visited = new Set(save?.visited || []);
    this.discovered = !!save?.secret;
    this.catFollowing = !!save?.cat;
    this.reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    this.resize = () => {
      const mobile = window.matchMedia("(max-width:600px)").matches;
      this.canvas.width = mobile
        ? Math.max(128, Math.floor((innerWidth - 24) / 2 / 16) * 16)
        : 320;
      this.canvas.height = mobile
        ? Math.max(
            176,
            Math.floor(Math.min(256, (innerHeight - 210) / 2) / 16) * 16,
          )
        : 240;
      const scale = mobile
        ? 2
        : Math.max(
            1,
            Math.floor(
              Math.min((innerWidth - 64) / 320, (innerHeight - 150) / 240),
            ),
          );
      this.canvas.style.width = this.canvas.width * scale + "px";
      this.canvas.style.height = this.canvas.height * scale + "px";
      this.ctx.imageSmoothingEnabled = false;
    };
    this.resize();
    this.keydown = (e) => {
      if (this.paused || e.target.closest("button,a,input,dialog")) return;
      const key = e.key.toLowerCase();
      if (
        [
          "arrowup",
          "arrowdown",
          "arrowleft",
          "arrowright",
          "w",
          "a",
          "s",
          "d",
          " ",
          "enter",
          "e",
        ].includes(key)
      ) {
        e.preventDefault();
        if ([" ", "enter", "e"].includes(key)) {
          if (!e.repeat) this.interact();
        } else {
          this.keys.add(key);
          this.path = [];
        }
      }
    };
    this.keyup = (e) => this.keys.delete(e.key.toLowerCase());
    this.blur = () => {
      this.keys.clear();
      this.path = [];
    };
    this.pointer = (e) => {
      if (this.paused || !this.ready) return;
      canvas.focus();
      const r = canvas.getBoundingClientRect();
      const target = {
        x: ((e.clientX - r.left) / r.width) * canvas.width + this.camera.x,
        y: ((e.clientY - r.top) / r.height) * canvas.height + this.camera.y,
      };
      this.tap(target);
    };
    window.addEventListener("keydown", this.keydown);
    window.addEventListener("keyup", this.keyup);
    window.addEventListener("blur", this.blur);
    window.addEventListener("resize", this.resize);
    canvas.addEventListener("pointerdown", this.pointer);
    this.load();
  }
  async load() {
    try {
      this.events.loading?.(0.15);
      this.town = await atlas("/styles/rpg/town/tiles.png");
      this.events.loading?.(0.6);
      this.dungeon = await atlas("/styles/rpg/dungeon/tiles.png");
      this.events.loading?.(1);
      if (this.destroyed) return;
      this.ready = true;
      this.canvas.focus({ preventScroll: true });
      this.last = performance.now();
      this.frame = requestAnimationFrame((t) => this.loop(t));
      this.emit();
    } catch (e) {
      this.events.error?.(e.message);
    }
  }
  destroy() {
    this.destroyed = true;
    cancelAnimationFrame(this.frame);
    window.removeEventListener("keydown", this.keydown);
    window.removeEventListener("keyup", this.keyup);
    window.removeEventListener("blur", this.blur);
    window.removeEventListener("resize", this.resize);
    this.canvas.removeEventListener("pointerdown", this.pointer);
  }
  setPaused(v) {
    this.paused = v;
    this.keys.clear();
    this.path = [];
  }
  setInput(key, on) {
    if (on) {
      this.keys.add(key);
      this.path = [];
    } else this.keys.delete(key);
  }
  tap(target) {
    const hit = this.scene.entities.find(
      (e) => Math.hypot(e.x - target.x, e.y - target.y) < 18,
    );
    if (hit && Math.hypot(hit.x - this.player.x, hit.y - this.player.y) < 26) {
      this.interact(hit);
      return;
    }
    this.path = findPath(
      this.scene,
      this.player,
      hit ? { x: hit.x, y: hit.y + 10 } : target,
    );
    this.tapEntity = hit || null;
    if (this.path.length)
      this.particles.push({
        x: target.x,
        y: target.y,
        life: 1,
        type: "target",
      });
  }
  nearest() {
    return this.scene.entities
      .map((e) => ({
        ...e,
        distance: Math.hypot(e.x - this.player.x, e.y - this.player.y),
      }))
      .sort((a, b) => a.distance - b.distance)[0];
  }
  interact(entity = this.nearest()) {
    if (
      !entity ||
      Math.hypot(entity.x - this.player.x, entity.y - this.player.y) > 28
    )
      return;
    this.events.sound?.("select");
    if (entity.type === "door") {
      this.enter(entity.id);
      return;
    }
    if (entity.type === "exit") {
      this.enter("village");
      return;
    }
    if (entity.type === "secret") {
      if (!this.discovered) {
        this.discovered = true;
        this.events.achievement?.(
          "Off the beaten path",
          "You found the old computer.",
        );
        this.events.sound?.("complete");
      }
      this.catFollowing = true;
    }
    if (["groundwork", "recon-qa", "tenvora", "logiflow"].includes(entity.id)) {
      const first = !this.visited.has(entity.id);
      this.visited.add(entity.id);
      if (first && this.visited.size === 4) {
        this.events.achievement?.(
          "Whole village explored",
          "All four projects discovered.",
        );
        this.events.sound?.("complete");
      }
    }
    this.emit();
    this.events.interact?.(entity.id);
  }
  enter(id) {
    this.keys.clear();
    this.path = [];
    this.transition = 1;
    this.events.transition?.(id);
    this.events.sound?.("door");
    if (id === "village") {
      const building = BUILDINGS.find((b) => b.id === this.scene.id);
      this.scene = createScene();
      this.player.x = (building.x + 2.5) * TILE;
      this.player.y = (building.y + 3.7) * TILE;
    } else {
      this.scene = createScene(id);
      this.player.x = 7.5 * TILE;
      this.player.y = 9.5 * TILE;
    }
    this.cat = { x: this.player.x - 14, y: this.player.y + 3 };
    this.player.direction = id === "village" ? "down" : "up";
    this.camera = {
      x: this.player.x - this.canvas.width / 2,
      y: this.player.y - this.canvas.height / 2,
    };
    this.emit();
  }
  emit() {
    const near = this.nearest();
    this.near = near?.distance < 28 ? near : null;
    this.events.state?.({
      scene: this.scene.id,
      place: ROOM_NAMES[this.scene.id],
      near: this.near,
      visited: [...this.visited],
      secret: this.discovered,
      cat: this.catFollowing,
      position: { x: Math.round(this.player.x), y: Math.round(this.player.y) },
    });
  }
  loop(now) {
    if (this.destroyed) return;
    const dt = Math.min(0.04, (now - this.last) / 1000);
    this.last = now;
    this.time += dt;
    if (!this.paused) this.update(dt);
    this.draw();
    this.frame = requestAnimationFrame((t) => this.loop(t));
  }
  update(dt) {
    let dx =
        (this.keys.has("d") || this.keys.has("arrowright") ? 1 : 0) -
        (this.keys.has("a") || this.keys.has("arrowleft") ? 1 : 0),
      dy =
        (this.keys.has("s") || this.keys.has("arrowdown") ? 1 : 0) -
        (this.keys.has("w") || this.keys.has("arrowup") ? 1 : 0);
    if (!dx && !dy && this.path.length) {
      const next = this.path[0],
        distance = Math.hypot(next.x - this.player.x, next.y - this.player.y);
      if (distance < 2) {
        this.path.shift();
        if (!this.path.length && this.tapEntity) {
          const entity = this.tapEntity;
          this.tapEntity = null;
          this.interact(entity);
        }
      } else {
        dx = (next.x - this.player.x) / distance;
        dy = (next.y - this.player.y) / distance;
      }
    }
    const magnitude = Math.hypot(dx, dy);
    this.walking = magnitude > 0;
    if (magnitude) {
      dx = (dx / magnitude) * 52 * dt;
      dy = (dy / magnitude) * 52 * dt;
      let moved = false;
      if (!blocked(this.scene, this.player.x + dx, this.player.y)) {
        this.player.x += dx;
        moved = true;
      }
      if (!blocked(this.scene, this.player.x, this.player.y + dy)) {
        this.player.y += dy;
        moved = true;
      }
      if (Math.abs(dx) > Math.abs(dy))
        this.player.direction = dx > 0 ? "right" : "left";
      else this.player.direction = dy > 0 ? "down" : "up";
      this.player.frame = Math.floor(this.time * 8) % 4;
      if (moved) {
        this.step += Math.hypot(dx, dy);
        if (this.step > 10) {
          this.step = 0;
          this.events.sound?.("step");
          if (!this.reduced)
            this.particles.push({
              x: this.player.x,
              y: this.player.y,
              life: 0.35,
              type: "dust",
            });
        }
      } else this.path = [];
    } else this.player.frame = 0;
    const follow = this.catFollowing;
    const distance = Math.hypot(
      this.cat.x - this.player.x,
      this.cat.y - this.player.y,
    );
    if (follow && distance > 22) {
      const speed = Math.min(distance - 20, dt * 35);
      const x = this.cat.x + ((this.player.x - this.cat.x) / distance) * speed,
        y = this.cat.y + ((this.player.y - this.cat.y) / distance) * speed;
      if (!blocked(this.scene, x, y)) {
        this.cat.x = x;
        this.cat.y = y;
      }
    }
    if (!follow && this.scene.id === 'village' && !this.reduced) {
      const x=this.cat.x+Math.sin(this.time/3)*dt*7,y=this.cat.y+Math.cos(this.time/5)*dt*7;
      if(!blocked(this.scene,x,y)){this.cat.x=x;this.cat.y=y;}
    }
    for (const p of this.particles) p.life -= dt;
    this.particles = this.particles.filter((p) => p.life > 0);
    this.transition = Math.max(0, this.transition - dt * 3);
    if (this.time - this.lastState > 0.15) {
      this.lastState = this.time;
      this.emit();
    }
  }
  draw() {
    const isNight = this.night ?? (Math.sin(this.time / 45 - Math.PI / 2) > 0);
    const ctx = this.ctx,
      w = this.canvas.width,
      h = this.canvas.height;
    ctx.imageSmoothingEnabled = false;
    ctx.fillStyle = PALETTE[0];
    ctx.fillRect(0, 0, w, h);
    const maxX = this.scene.width * TILE - w,
      maxY = this.scene.height * TILE - h;
    const targetX =
        maxX < 0
          ? maxX / 2
          : Math.max(0, Math.min(maxX, this.player.x - w / 2)),
      targetY =
        maxY < 0
          ? maxY / 2
          : Math.max(0, Math.min(maxY, this.player.y - h / 2));
    this.camera.x += (targetX - this.camera.x) * (this.reduced ? 1 : 0.14);
    this.camera.y += (targetY - this.camera.y) * (this.reduced ? 1 : 0.14);
    this.camera.x = Math.round(this.camera.x);
    this.camera.y = Math.round(this.camera.y);
    ctx.save();
    ctx.translate(-this.camera.x, -this.camera.y);
    const tile = (image, id, x, y) =>
      ctx.drawImage(
        image,
        (id % 12) * 16,
        Math.floor(id / 12) * 16,
        16,
        16,
        x * 16,
        y * 16,
        16,
        16,
      );
    if (this.scene.id === "village") this.drawVillage(ctx, tile);
    else this.drawRoom(ctx, tile);
    const actors = [
      {
        y: this.player.y,
        draw: () => {
          ctx.fillStyle = PALETTE[2];
          ctx.fillRect(
            Math.round(this.player.x) - 5,
            Math.round(this.player.y) + 1,
            13,
            2,
          );
          drawAvatar(
            ctx,
            this.player.x - 8,
            this.player.y,
            this.player.direction,
            this.player.frame,
          );
        },
      },
    ];
    if (this.scene.id === "village" || this.catFollowing)
      actors.push({
        y: this.cat.y,
        draw: () => drawCat(ctx, this.cat.x, this.cat.y, this.time),
      });
    if (this.scene.id === "about")
      actors.push({
        y: 4.8 * TILE,
        draw: () => drawAvatar(ctx, 5.5 * TILE - 8, 4.8 * TILE, "down", 0),
      });
    if (this.scene.id === "village")
      for (const t of this.scene.trees)
        actors.push({
          y: (t.y + 2) * TILE,
          draw: () => {
            tile(this.town, 4, t.x, t.y);
            tile(this.town, 16, t.x, t.y + 1);
          },
        });
    actors.sort((a, b) => a.y - b.y).forEach((a) => a.draw());
    if (this.near && !this.paused) {
      const e = this.near,
        bob = this.reduced ? 0 : Math.round(Math.sin(this.time * 4) * 2);
      ctx.fillStyle = PALETTE[0];
      ctx.fillRect(Math.round(e.x) - 7, Math.round(e.y) - 30 + bob, 14, 12);
      ctx.fillStyle = PALETTE[28];
      ctx.font = "8px monospace";
      ctx.textAlign = "center";
      pixelText(ctx,"E",Math.round(e.x),Math.round(e.y)-26+bob);
    }
    for (const p of this.particles) {
      if (p.type === "target") {
        ctx.strokeStyle = PALETTE[28];
        ctx.strokeRect(Math.round(p.x) - 3, Math.round(p.y) - 3, 6, 6);
      } else {
        ctx.fillStyle = PALETTE[10];
        ctx.fillRect(Math.round(p.x) - 3, Math.round(p.y) + 2, 2, 1);
      }
    }
    if (!this.reduced)
      for (let i = 0; i < 7; i++) {
        const x = this.player.x - 100 + ((i * 43 + this.time * 3) % 200),
          y =
            this.player.y - 80 + ((i * 29 + Math.sin(this.time + i) * 4) % 150);
        ctx.fillStyle = PALETTE[28];
          if (isNight || Math.sin(this.time * 2 + i) > 0.95)
          ctx.fillRect(Math.round(x), Math.round(y), 1, 1);
      }
    ctx.restore();
    if (isNight) {
      ctx.fillStyle = "#12251f88";
      ctx.fillRect(0, 0, w, h);
      ctx.fillStyle = PALETTE[28];
      for (let i = 0; i < 5; i++)
        ctx.fillRect(
          Math.round((i * 71 + this.time * 2) % w),
          Math.round((i * 41 + Math.sin(this.time + i) * 4) % h),
          1,
          1,
        );
    }
    if (this.transition && !this.reduced) {
      ctx.fillStyle = PALETTE[0];
      const blocks = Math.ceil(this.transition * 16);
      for (let i = 0; i < w / 16; i++)
        for (let j = 0; j < h / 16; j++)
          if ((i * 7 + j * 11) % 16 < blocks)
            ctx.fillRect(i * 16, j * 16, 16, 16);
    }
  }
  drawVillage(ctx, tile) {
    for (let y = 0; y < 32; y++)
      for (let x = 0; x < 32; x++)
        tile(this.town, (x * 7 + y * 11) % 41 === 0 ? 1 : 0, x, y);
    for (const key of this.scene.paths) {
      const [x, y] = key.split(",").map(Number),
        p = this.scene.paths;
      const top = p.has(x + "," + (y - 1)),
        bottom = p.has(x + "," + (y + 1)),
        left = p.has(x - 1 + "," + y),
        right = p.has(x + 1 + "," + y);
      tile(
        this.town,
        (!top ? 1 : !bottom ? 3 : 2) * 12 + (!left ? 0 : !right ? 2 : 1),
        x,
        y,
      );
    }
    // Water is an original animated tile, using the same 32-color world palette.
    // Small flower gardens and stone edging break up the village greens.
    for(const [gx,gy] of [[5,25],[8,26],[13,21],[20,20],[10,11],[20,11]]) {
      for(let n=0;n<7;n++){const x=gx*16+(n%4)*7,y=gy*16+Math.floor(n/4)*9;ctx.fillStyle=PALETTE[3];ctx.fillRect(x,y,2,5);ctx.fillStyle=PALETTE[n%2?28:23];ctx.fillRect(x-1,y-2,4,3);}
    }
    ctx.fillStyle = PALETTE[16];
    ctx.fillRect(24 * TILE, 2 * TILE, 5 * TILE, 4 * TILE);
    ctx.fillStyle = PALETTE[17];
    ctx.fillRect(24 * TILE + 3, 2 * TILE + 3, 5 * TILE - 6, 4 * TILE - 6);
    ctx.fillStyle = PALETTE[18];
    for (let i = 0; i < 12; i++) {
      const x = 24 * TILE + 5 + (i % 4) * 18,
        y =
          2 * TILE +
          8 +
          Math.floor(i / 4) * 17 +
          (this.reduced ? 0 : Math.floor(this.time * 2 + i) % 2);
      ctx.fillRect(x, y, 6, 1);
    }
    for (const b of BUILDINGS) {
      ctx.fillStyle = PALETTE[2];
      ctx.fillRect(b.x * TILE + 2, (b.y + 3) * TILE, 50, 3);
      const ids =
        b.roof === 48
          ? [48, 49, 50, 60, 61, 62, 72, 73, 74]
          : [52, 53, 54, 64, 65, 66, 76, 77, 78];
      ids.forEach((id, i) =>
        tile(this.town, id, b.x + (i % 3), b.y + Math.floor(i / 3)),
      );
      ctx.fillStyle = PALETTE[0];
      ctx.fillRect(b.x * TILE - 3, (b.y + 3) * TILE + 3, 55, 9);
      ctx.font = "5px monospace";
      ctx.textAlign = "center";
      ctx.fillStyle = PALETTE[8];
      pixelText(ctx,
        b.id === "about"
          ? "WORKSHOP"
          : b.id === "recon-qa"
            ? "RECON QA"
            : b.id.toUpperCase(),
        (b.x + 1.5) * TILE,
        (b.y + 3) * TILE + 10,
      );
    }
    for (const [x, y] of [
      [3, 10],
      [10, 13],
      [22, 15],
      [28, 18],
      [4, 26],
      [22, 28],
    ])
      tile(this.town, 17, x, y);
    // Board, mailbox, station, and secret computer are small original pixel props.
    const box = (c, x, y, w, h) => {
      ctx.fillStyle = PALETTE[c];
      ctx.fillRect(x, y, w, h);
    };
    box(11, 12 * TILE, 25 * TILE, 16, 14);
    box(9, 12 * TILE + 2, 25 * TILE + 2, 12, 8);
    box(13, 12 * TILE + 2, 26 * TILE - 2, 2, 7);
    box(13, 12 * TILE + 12, 26 * TILE - 2, 2, 7);
    box(8, 12 * TILE + 4, 25 * TILE + 4, 4, 4);
    box(8, 12 * TILE + 9, 25 * TILE + 3, 4, 5);
    box(13, 20 * TILE + 7, 26 * TILE + 9, 2, 14);
    box(17, 20 * TILE + 2, 26 * TILE + 3, 13, 9);
    box(0, 20 * TILE + 3, 26 * TILE + 6, 8, 2);
    box(23, 20 * TILE + 14, 26 * TILE + 1, 2, 6);
    for (let x = 12; x < 22; x++) {
      box(31, x * TILE, 30 * TILE, 16, 8);
      box(29, x * TILE + 1, 30 * TILE + 1, 14, 3);
    }
    box(15, 3 * TILE, 3 * TILE, 16, 12);
    box(18, 3 * TILE + 2, 3 * TILE + 2, 12, 7);
    box(4, 3 * TILE + 4, 3 * TILE + 4, 5, 1);
    box(31, 3 * TILE + 6, 3 * TILE + 12, 4, 2);
  }
  drawRoom(ctx, tile) {
    for (let y = 0; y < 12; y++)
      for (let x = 0; x < 15; x++) {
        ctx.fillStyle =
          PALETTE[
            y < 2 || x === 0 || x === 14 || y === 11
              ? 13
              : (x + y) % 2 === 0
                ? 11
                : 10
          ];
        ctx.fillRect(x * 16, y * 16, 16, 16);
        if (y >= 2 && x > 0 && x < 14) {
          ctx.fillStyle = PALETTE[12];
          ctx.fillRect(x * 16, y * 16, 16, 1);
          ctx.fillRect(x * 16, y * 16, 1, 16);
        }
      }
    ctx.fillStyle = PALETTE[5];
    ctx.fillRect(6 * 16, 9 * 16, 3 * 16, 32);
    ctx.fillStyle = PALETTE[6];
    ctx.fillRect(6 * 16 + 3, 9 * 16 + 3, 3 * 16 - 6, 26);
    ctx.fillStyle = PALETTE[13];
    ctx.fillRect(4 * 16, 3 * 16, 8 * 16, 20);
    ctx.fillStyle = PALETTE[10];
    ctx.fillRect(4 * 16, 3 * 16, 8 * 16, 14);
    for (let i = 0; i < 3; i++) {
      tile(this.dungeon, 48 + i, 2 + i, 2);
      tile(this.dungeon, 48 + i, 10 + i, 2);
    }
    if (this.scene.id === "about") {
      tile(this.dungeon, 116, 9, 3);
      this.drawScroll(ctx, 10.5 * 16, 8.3 * 16);
    } else if (this.scene.id === "groundwork") {
      for (let i = 0; i < 5; i++) tile(this.dungeon, 48 + (i % 3), 5 + i, 3);
    } else if (this.scene.id === "recon-qa") {
      ctx.fillStyle = PALETTE[15];
      ctx.fillRect(6 * 16 + 3, 3 * 16 - 7, 25, 20);
      ctx.fillStyle = PALETTE[18];
      ctx.fillRect(6 * 16 + 6, 3 * 16 - 4, 19, 11);
      ctx.fillStyle = PALETTE[6];
      ctx.fillRect(6 * 16 + 8, 3 * 16, 8, 1);
    } else if (this.scene.id === "tenvora") {
      tile(this.dungeon, 89, 7, 3);
      tile(this.dungeon, 113, 6, 3);
    } else {
      ctx.fillStyle = PALETTE[8];
      ctx.fillRect(6 * 16, 3 * 16 - 4, 40, 17);
      ctx.strokeStyle = PALETTE[5];
      ctx.beginPath();
      ctx.moveTo(6 * 16 + 4, 3 * 16);
      ctx.lineTo(6 * 16 + 20, 3 * 16 + 7);
      ctx.lineTo(6 * 16 + 34, 3 * 16 - 1);
      ctx.stroke();
    }
    // Window, clock, and slow hearth flicker make rooms feel occupied.
    ctx.fillStyle = PALETTE[17];
    ctx.fillRect(7 * 16, 8, 20, 15);
    ctx.fillStyle = PALETTE[19];
    ctx.fillRect(7 * 16 + 2, 10, 7, 10);
    ctx.fillRect(7 * 16 + 11, 10, 7, 10);
    ctx.fillStyle = PALETTE[26];
    ctx.fillRect(2 * 16 + 4, 8 * 16, 7, 8);
    ctx.fillStyle = PALETTE[28];
    ctx.fillRect(
      2 * 16 + 6,
      8 * 16 + (this.reduced ? 3 : Math.floor(this.time * 3) % 3),
      3,
      6,
    );
  }
  drawScroll(ctx, x, y) {
    ctx.fillStyle = PALETTE[9];
    ctx.fillRect(x - 5, y - 10, 10, 12);
    ctx.fillStyle = PALETTE[8];
    ctx.fillRect(x - 4, y - 8, 8, 8);
    ctx.fillStyle = PALETTE[11];
    ctx.fillRect(x - 2, y - 6, 5, 1);
    ctx.fillRect(x - 2, y - 4, 4, 1);
  }
}
