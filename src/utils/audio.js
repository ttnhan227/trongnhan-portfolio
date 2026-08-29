// Retro RPG Audio & BGM Manager
// Provides 16-bit sound effects (SFX) and ambient medieval background music (BGM)

const SFX_FILES = {
  cursor: '/styles/audio/cursor.mp3',
  select: '/styles/audio/select.mp3',
  equip: '/styles/audio/equip.mp3',
  victory: '/styles/audio/victory.mp3',
  heal: '/styles/audio/heal.mp3',
  close: '/styles/audio/close.mp3',
  save: '/styles/audio/save.mp3',
  drop: '/styles/audio/drop.mp3',
}

export const BGM_TRACKS = [
  { id: 'tavern', name: 'Medieval Tavern Loop', src: '/styles/audio/bgm-tavern.mp3' },
  { id: 'medieval', name: 'Adventurer Guild Theme', src: '/styles/audio/bgm-medieval.mp3' },
  { id: 'forest', name: 'Enchanted Forest Ambience', src: '/styles/audio/bgm-forest.mp3' },
]

let isSfxEnabled = false
let isBgmPlaying = false
let currentTrackIndex = 0
let bgmAudio = null
const listeners = new Set()

function notifyListeners() {
  const state = {
    sfxEnabled: isSfxEnabled,
    bgmPlaying: isBgmPlaying,
    currentTrack: BGM_TRACKS[currentTrackIndex],
  }
  listeners.forEach((listener) => {
    try {
      listener(state)
    } catch (e) {}
  })
}

export function subscribeAudioState(listener) {
  listeners.add(listener)
  listener({
    sfxEnabled: isSfxEnabled,
    bgmPlaying: isBgmPlaying,
    currentTrack: BGM_TRACKS[currentTrackIndex],
  })
  return () => listeners.delete(listener)
}

export function initAudio() {
  if (typeof window === 'undefined') return

  const storedSfx = localStorage.getItem('rpg_sfx_enabled')
  if (storedSfx !== null) {
    isSfxEnabled = storedSfx === 'true'
  }

  const storedTrack = localStorage.getItem('rpg_bgm_track')
  if (storedTrack) {
    const idx = BGM_TRACKS.findIndex((t) => t.id === storedTrack)
    if (idx !== -1) currentTrackIndex = idx
  }

  notifyListeners()
}

export function isAudioEnabled() {
  return isSfxEnabled
}

export function isBgmEnabled() {
  return isBgmPlaying
}

export function getCurrentBgmTrack() {
  return BGM_TRACKS[currentTrackIndex]
}

export function toggleAudio() {
  isSfxEnabled = !isSfxEnabled
  if (typeof window !== 'undefined') {
    localStorage.setItem('rpg_sfx_enabled', String(isSfxEnabled))
    if (isSfxEnabled) {
      playSfx('select')
    }
  }
  notifyListeners()
  return isSfxEnabled
}

export function playSfx(name) {
  if (!isSfxEnabled || typeof window === 'undefined') return
  const src = SFX_FILES[name]
  if (!src) return

  try {
    const audio = new Audio(src)
    audio.volume = 0.35
    audio.play().catch(() => {})
  } catch (err) {}
}

export function toggleBgm() {
  if (typeof window === 'undefined') return false

  if (isBgmPlaying) {
    stopBgm()
  } else {
    startBgm()
  }
  return isBgmPlaying
}

function startBgm() {
  const track = BGM_TRACKS[currentTrackIndex]
  if (!bgmAudio) {
    bgmAudio = new Audio(track.src)
    bgmAudio.loop = true
    bgmAudio.volume = 0.3
  } else {
    bgmAudio.src = track.src
  }

  isBgmPlaying = true
  notifyListeners()

  bgmAudio.play().catch((err) => {
    // Autoplay policy or abort
    console.warn('BGM playback was prevented:', err)
  })
}

export function stopBgm() {
  if (bgmAudio) {
    bgmAudio.pause()
  }
  isBgmPlaying = false
  notifyListeners()
  return isBgmPlaying
}

export function nextBgmTrack() {
  currentTrackIndex = (currentTrackIndex + 1) % BGM_TRACKS.length
  const nextTrack = BGM_TRACKS[currentTrackIndex]

  if (typeof window !== 'undefined') {
    localStorage.setItem('rpg_bgm_track', nextTrack.id)
  }

  if (isBgmPlaying) {
    startBgm()
  } else {
    notifyListeners()
  }

  return nextTrack
}
