import { useEffect, useRef, useState } from "react";
import { VillageEngine } from "./engine";

export default function CanvasGame({ events, save, paused, night, engineRef }) {
  const canvas = useRef(null),
    callbacks = useRef(events);
  callbacks.current = events;
  const [progress, setProgress] = useState(0),
    [error, setError] = useState("");
  useEffect(() => {
    const engine = new VillageEngine(
      canvas.current,
      {
        state: (s) => callbacks.current.state?.(s),
        interact: (id) => callbacks.current.interact?.(id),
        sound: (id) => callbacks.current.sound?.(id),
        achievement: (...args) => callbacks.current.achievement?.(...args),
        transition: (id) => callbacks.current.transition?.(id),
        loading: setProgress,
        error: setError,
      },
      save,
    );
    engineRef.current = engine;
    return () => {
      engine.destroy();
      engineRef.current = null;
    };
  }, []);
  useEffect(() => engineRef.current?.setPaused(paused), [paused]);
  useEffect(() => {
    if (engineRef.current) engineRef.current.night = night;
  }, [night]);
  return (
    <div className="game-viewport">
      <canvas
        ref={canvas}
        tabIndex={0}
        className="game-canvas"
        aria-label="Workshop Village. Move with arrows or WASD. Press E, Enter, or Space to interact. Tap to walk."
      />
      {progress < 1 && !error && (
        <div className="world-loading" role="status">
          <span>Opening the village…</span>
          <progress value={progress} max="1" />
        </div>
      )}
      {error && (
        <p className="world-loading" role="alert">
          The village could not load. Use the portfolio list below.
        </p>
      )}
    </div>
  );
}
