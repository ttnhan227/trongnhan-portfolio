import { useEffect } from 'react'
import { CloseIcon } from './Icons'
import { playSfx } from '../utils/audio'

export default function ImageModal({ image, onClose, onPrev, onNext, hasPrev, hasNext }) {
  useEffect(() => {
    if (!image) return

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        playSfx('close')
        onClose()
      } else if (e.key === 'ArrowLeft' && hasPrev && onPrev) {
        playSfx('cursor')
        onPrev()
      } else if (e.key === 'ArrowRight' && hasNext && onNext) {
        playSfx('cursor')
        onNext()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [image, onClose, onPrev, onNext, hasPrev, hasNext])

  if (!image) return null

  return (
    <div
      className="modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-label={image.title || 'Screenshot viewer'}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div className="modal-container">
        <div className="modal-header">
          <div className="modal-title-group">
            <span className="modal-kicker">ARTIFACT INSPECTOR</span>
            <h3 className="modal-title">{image.title}</h3>
          </div>
          <div className="modal-actions">
            <span className="modal-kbd-hint">ESC TO CLOSE</span>
            <button
              className="modal-close-btn"
              type="button"
              onClick={onClose}
              aria-label="Close modal viewer"
            >
              <CloseIcon />
            </button>
          </div>
        </div>

        <div className="modal-body">
          <img
            className="modal-image"
            src={image.image}
            alt={image.title}
          />
        </div>

        {image.caption && (
          <div className="modal-footer">
            <p className="modal-caption">{image.caption}</p>
          </div>
        )}
      </div>
    </div>
  )
}
