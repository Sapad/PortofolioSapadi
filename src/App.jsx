import { useState } from 'react'
import Sidenav from './components/Sidenav'
import Main from './components/Main'
import Project from './components/Project'
import Projects from './components/Projects'
import Contact from './components/Contact'


function App() {

  return (
      <div>
        <Sidenav />
        <Main />
        <Project />
        <Projects />
        <Contact />
      </div>
  )
}

export default App
