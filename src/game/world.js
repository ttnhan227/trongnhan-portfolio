// World coordinates use a 16px tile. Content and scene geometry stay separate.
export const TILE = 16;
export const PALETTE = [
  "#12251f",
  "#20372a",
  "#304b35",
  "#446345",
  "#62804d",
  "#89a25b",
  "#b5be78",
  "#d5d8a4",
  "#f3e8bd",
  "#e4c393",
  "#c9a477",
  "#a58161",
  "#80634f",
  "#584b42",
  "#3b3d3b",
  "#202d32",
  "#304c5e",
  "#48728a",
  "#6a9ca7",
  "#99bfc1",
  "#c5d8ca",
  "#efddd0",
  "#d5aaa0",
  "#b77865",
  "#945745",
  "#704d45",
  "#c58c58",
  "#dcac68",
  "#e7cb86",
  "#b5aa91",
  "#868d83",
  "#616d68",
];
export const BUILDINGS = [
  { id: "groundwork", name: "Groundwork library", x: 5, y: 6, roof: 48 },
  { id: "recon-qa", name: "Recon workshop", x: 23, y: 6, roof: 52 },
  { id: "about", name: "Nhân’s workshop", x: 14, y: 12, roof: 48 },
  { id: "tenvora", name: "Tenvora shop", x: 5, y: 20, roof: 52 },
  { id: "logiflow", name: "LogiFlow station", x: 23, y: 20, roof: 48 },
];
export const ROOM_NAMES = {
  village: "Workshop Village",
  about: "Nhân’s workshop",
  groundwork: "Groundwork library",
  "recon-qa": "Recon testing room",
  tenvora: "Tenvora shop",
  logiflow: "LogiFlow dispatch room",
};
export const spawn = { x: 18.5 * TILE, y: 28 * TILE };
const entity = (id, name, x, y, type = "content") => ({
  id,
  name,
  x: x * TILE,
  y: y * TILE,
  type,
});
export function createScene(id = "village") {
  if (id !== "village") {
    const project = id !== "about";
    const entities = [entity("exit", "Return to village", 7.5, 10.6, "exit")];
    if (project)
      entities.push(
        entity(
          id,
          id === "groundwork"
            ? "Open the file cabinet"
            : id === "recon-qa"
              ? "Run the test console"
              : id === "tenvora"
                ? "Open the sales ledger"
                : "Inspect the dispatch map",
          7.5,
          4.7,
        ),
      );
    else
      entities.push(
        entity("about", "Talk to Nhân", 5.5, 4.8),
        entity("skills", "Inspect the workbench", 9.5, 4.8),
        entity("resume", "Pick up the résumé", 10.5, 8.3, "scroll"),
      );
    return {
      id,
      width: 15,
      height: 12,
      entities,
      obstacles: [
        { x: 0, y: 0, w: 240, h: 32 },
        { x: 0, y: 0, w: 16, h: 192 },
        { x: 224, y: 0, w: 16, h: 192 },
        { x: 0, y: 176, w: 96, h: 16 },
        { x: 144, y: 176, w: 96, h: 16 },
        { x: 64, y: 48, w: 128, h: 20 },
      ],
      trees: [],
      paths: new Set(),
    };
  }
  const paths = new Set();
  const road = (x, y, w, h) => {
    for (let j = y; j < y + h; j++)
      for (let i = x; i < x + w; i++) paths.add(i + "," + j);
  };
  road(7, 9, 20, 2);
  road(7, 23, 20, 2);
  road(7, 9, 2, 16);
  road(25, 9, 2, 16);
  road(18, 9, 2, 21);
  road(7, 16, 20, 2);
  road(16, 15, 4, 2);
  road(11, 27, 9, 2);
  road(3, 3, 3, 1);
  road(5, 3, 1, 6);
  const trees = [];
  for (let y = 1; y < 31; y += 2)
    for (let x = 1; x < 31; x += 2) {
      const border = x < 3 || x > 28 || y < 3 || y > 29;
      const grove =
        (x >= 10 && x <= 13 && y >= 3 && y <= 7) ||
        (x >= 3 && x <= 5 && y >= 12 && y <= 17) ||
        (x >= 21 && x <= 23 && y >= 12 && y <= 16) ||
        (x >= 10 && x <= 13 && y >= 20 && y <= 23);
      if ((border || grove) && !paths.has(x + "," + y) && !(x >= 23 && y < 7))
        trees.push({ x, y });
    }
  const obstacles = [
    ...BUILDINGS.map((b) => ({ x: b.x * TILE, y: b.y * TILE, w: 48, h: 48 })),
    ...trees.map((t) => ({
      x: t.x * TILE + 3,
      y: t.y * TILE + 7,
      w: 10,
      h: 21,
    })),
    { x: 24 * TILE, y: 2 * TILE, w: 5 * TILE, h: 4 * TILE },
  ];
  const entities = BUILDINGS.map((b) => ({
    ...entity(b.id, b.name, b.x + 2.5, b.y + 3.4, "door"),
    building: b,
  }));
  entities.push(
    entity("experience", "Read the noticeboard", 12.5, 26, "board"),
    entity("contact", "Open the mailbox", 20.5, 27, "mailbox"),
    entity("secret", "Inspect the old computer", 3.5, 3.6, "secret"),
  );
  return { id, width: 32, height: 32, paths, trees, obstacles, entities };
}
export function blocked(scene, x, y) {
  const r = 3;
  if (
    x < 8 ||
    y < 8 ||
    x > scene.width * TILE - 8 ||
    y > scene.height * TILE - 6
  )
    return true;
  return scene.obstacles.some(
    (o) => x + r > o.x && x - r < o.x + o.w && y + 1 > o.y && y - r < o.y + o.h,
  );
}
// Breadth-first paths cannot cross solid tiles; taps never teleport the player.
export function findPath(scene, start, target) {
  const key = (x, y) => x + "," + y;
  const sx = Math.floor(start.x / TILE),
    sy = Math.floor(start.y / TILE);
  let tx = Math.max(0, Math.min(scene.width - 1, Math.floor(target.x / TILE))),
    ty = Math.max(0, Math.min(scene.height - 1, Math.floor(target.y / TILE)));
  if (blocked(scene, tx * TILE + 8, ty * TILE + 12)) {
    let best = null;
    for (let d = 1; d < 5 && !best; d++)
      for (let y = ty - d; y <= ty + d; y++)
        for (let x = tx - d; x <= tx + d; x++)
          if (
            !blocked(scene, x * TILE + 8, y * TILE + 12) &&
            (!best || Math.hypot(x - tx, y - ty) < best.d)
          )
            best = { x, y, d: Math.hypot(x - tx, y - ty) };
    if (!best) return [];
    tx = best.x;
    ty = best.y;
  }
  const queue = [[sx, sy]],
    parents = new Map([[key(sx, sy), null]]);
  let found = false;
  for (let q = 0; q < queue.length; q++) {
    const [x, y] = queue[q];
    if (x === tx && y === ty) {
      found = true;
      break;
    }
    for (const [dx, dy] of [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1],
    ]) {
      const nx = x + dx,
        ny = y + dy,
        k = key(nx, ny);
      if (!parents.has(k) && !blocked(scene, nx * TILE + 8, ny * TILE + 12)) {
        parents.set(k, key(x, y));
        queue.push([nx, ny]);
      }
    }
  }
  if (!found) return [];
  const result = [];
  let k = key(tx, ty);
  while (k !== key(sx, sy)) {
    const [x, y] = k.split(",").map(Number);
    result.unshift({ x: x * TILE + 8, y: y * TILE + 12 });
    k = parents.get(k);
    if (!k) break;
  }
  return result;
}
