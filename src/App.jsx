import { useState, useEffect } from 'react'
import { Navigation } from './components/navigation'
import { Home } from './components/home'
import { Features } from './components/features'
import { About } from './components/about'
import { Contact } from './components/footer'
import JsonData from './data/data.json'
import SmoothScroll from 'smooth-scroll'

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
})

const App = () => {
  const [landingPageData, setLandingPageData] = useState({})
  useEffect(() => {
    setLandingPageData(JsonData)
  }, [])

  return (
    <div>
      <Navigation />
      <Home data={landingPageData.Home} />
      <About data={landingPageData.About} />
      <Features data={landingPageData.Features} />
      <Contact data={landingPageData.Contact} />
    </div>
  )
}

export default App
