import React from 'react'

import { Header, Work, Skills, About, Contact} from "./container"
import { Navbar } from "./components"
// import "./App.scss"

function App() {
  return (
    <div className='app'>
      <Navbar />
      <Header />
      <Work />
      <Skills />
      <About />
      <Contact />
    </div>
  )
}

export default App