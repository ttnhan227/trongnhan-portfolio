export default function BackgroundOverlay() {
  return (
    <div className="pixel-bg-container" aria-hidden="true">
      {/* 16-Bit Fantasy RPG Entrance Background Layer */}
      <div className="pixel-entrance-bg" />

      {/* Floating 8-Bit Pixel Stars */}
      <div className="pixel-star star-1" />
      <div className="pixel-star star-2" />
      <div className="pixel-star star-3" />
      <div className="pixel-star star-4" />
      <div className="pixel-star star-5" />
      <div className="pixel-star star-6" />
      <div className="pixel-star star-7" />
      <div className="pixel-star star-8" />
      <div className="pixel-star star-9" />
      <div className="pixel-star star-10" />

      {/* Retro Dither Grid, Scanlines & Vignette */}
      <div className="pixel-grid-layer" />
      <div className="crt-scanlines-layer" />
      <div className="fantasy-vignette-layer" />

      {/* Screen Edge Guild Corner Brackets */}
      <div className="arcade-corner corner-top-left">╔</div>
      <div className="arcade-corner corner-top-right">╗</div>
      <div className="arcade-corner corner-bottom-left">╚</div>
      <div className="arcade-corner corner-bottom-right">╝</div>
    </div>
  )
}
