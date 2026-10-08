# Nhân’s Workshop Village

A playable Canvas + React + Vite portfolio with a 16×16 village, five interiors, keyboard and mobile movement, collision, tap-to-walk pathfinding, accessible HTML dialogs and a plain portfolio view.

## Run

```sh
npm install
npm run dev -- --host 127.0.0.1 --port 5187 --strictPort
npm run build
npm run test:e2e
```

Open http://127.0.0.1:5187/. The static build is in `dist/`. Port 5173 may be occupied by Tenvora on this workstation.

## Controls and stage checks
1. New Game: arrows/WASD move; click or tap walks along a path. Buildings, furniture, trees and pond have collision.
2. Approach a door and press E, Space or Enter. Inspect the room object to open its showcase directly. Escape closes dialogs. Visit Nhân for short dialogue.
3. Workbench opens skills; noticeboard opens chapters; mailbox opens contact; scroll opens the current master-CV PDF. Skip to Portfolio exposes genuine links and content without gameplay.
4. Sound starts muted. Enable it for area loops and interaction sounds. Optional scanlines, day/night lighting, fireflies, water, dust and door dissolves add game feel. Find the old computer for a discovery and following cat; inspecting all four projects gives an achievement.
5. Phones have a D-pad, A button and tap-to-walk. Reduced-motion preferences disable major motion effects. Continue restores locally saved progress.

## Editing content
- `src/data/questProjects.js`: project text, live/source links, tech stacks and selected screenshots. Use `format: "phone"` for portrait native captures.
- `src/data/villageContent.js`: profile, contact links, skills with project evidence, dialogue and chapters.
- `src/game/world.js`: buildings, scene geometry, collisions and interaction objects. Add a building and room here when adding a project.
- `src/game/engine.js`: canvas rendering, movement and scene transitions.
- `src/game/GamePanels.jsx`: accessible HTML content dialogs.
- `src/game/audio.js`: original small Web Audio melodies and effects.

## Swapping art
Use a licensed 16×16 packed tileset in `public/styles/rpg/`; update atlas URLs and tile indices in the engine. Imported art is quantized to `PALETTE` in world.js. Preserve original licenses and add source, usage and modifications to `public/styles/rpg/CREDITS.md`.

## Captures
Groundwork has one current file preview; Recon shows a real CLI run in a terminal emulator; LogiFlow shows the dispatch trip map; Tenvora has web and native Flutter sales ledgers. No landing-page gallery or capture-date labels. See public/styles/projects/CAPTURE_NOTES.md for setup details.

