import { useState, useEffect } from 'react'
import HeaderHUD from './components/HeaderHUD'
import HeroSection from './components/HeroSection'
import MissionSelector from './components/MissionSelector'
import OpenSourceModule from './components/OpenSourceModule'
import LoadoutSection from './components/LoadoutSection'
import BuildsArchive from './components/BuildsArchive'
import ContactSection from './components/ContactSection'
import ImageModal from './components/ImageModal'
import BackgroundOverlay from './components/BackgroundOverlay'
import { flagshipMissions } from './data/projects'

export default function App() {
  const [activeSection, setActiveSection] = useState('init')
  const [activeStageIndex, setActiveStageIndex] = useState(0)
  const [selectedImage, setSelectedImage] = useState(null)

  // Scroll spy to update current zone in Header HUD
  useEffect(() => {
    const sections = ['init', 'missions', 'tooling', 'loadout', 'builds', 'comm']
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 160

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el) {
          const top = el.offsetTop
          if (scrollPosition >= top) {
            setActiveSection(sections[i])
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const currentStageName = flagshipMissions[activeStageIndex]?.title || 'STAGE_01'

  return (
    <div className="retro-portfolio-app">
      {/* 16-Bit Atmospheric Pixel Background & Starfield Layer */}
      <BackgroundOverlay />

      {/* Top Arcade HUD Header */}
      <HeaderHUD
        activeSection={activeSection}
        activeStageName={currentStageName}
      />

      {/* Main Tactical Experience */}
      <main id="main-content">
        {/* 01: Init / Title Screen Hero */}
        <HeroSection />

        {/* 02: Flagship Missions & Stage Selector */}
        <MissionSelector
          onSelectImage={setSelectedImage}
          activeStageIndex={activeStageIndex}
          setActiveStageIndex={setActiveStageIndex}
        />

        {/* 03: Published Open Source Tooling (recon-qa) */}
        <OpenSourceModule onSelectImage={setSelectedImage} />

        {/* 04: Engineering Loadout & Inventory */}
        <LoadoutSection />

        {/* 05: Side Quests & Archive */}
        <BuildsArchive />

        {/* 06: Transmission Channel & Footer */}
        <ContactSection />
      </main>

      {/* Accessible Screenshot Lightbox Viewer */}
      <ImageModal
        image={selectedImage}
        onClose={() => setSelectedImage(null)}
      />
    </div>
  )
}
