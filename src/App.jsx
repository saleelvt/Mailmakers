import Footer from './components/layout/Footer'
import Navbar from './components/layout/Navbar'
import AboutPage from './components/pages/AboutPage/AboutPage'
import CapturedMemories from './components/pages/LandingPage/Capturedmemories'
import CTABanner from './components/pages/LandingPage/CtaBanner'
import HeroSection from './components/pages/LandingPage/HeroSection'
import StatsSection from './components/pages/LandingPage/StatusSection'
import TripsGallery from './components/pages/LandingPage/TripsGallery'
import WhatWeDo from './components/pages/LandingPage/WhatWeDo'
import WhyChoose from './components/pages/LandingPage/WhyChoose'

function App() {
  const currentPath = window.location.pathname.toLowerCase()
  const isAboutPage = currentPath === '/about' || currentPath === '/about/'

  return (
    <div className="relative">
      <Navbar currentPath={currentPath} />
      {isAboutPage ? (
        <AboutPage />
      ) : (
        <>
          <HeroSection />
          <WhatWeDo />
          <TripsGallery />
          <WhyChoose />
          <CapturedMemories />
          <StatsSection />
          <CTABanner />
        </>
      )}
      <Footer />
    </div>
  )
}

export default App
