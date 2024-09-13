import React from 'react'

import Home from './Home'
import AboutMe from './AboutMe'
import Portfolio from './Portofolio'
import Resume from './Resume'


export default function LandingPage() {
  return (
    <div>
      <Home/>
      <AboutMe/>
      <Portfolio/>
      <Resume/>
    </div>
  )
}
