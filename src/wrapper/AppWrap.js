import React from 'react'
import {NavigationDots, SocialMedia} from "../components"
import "./AppWrap.scss"
import "../components/SocialMedia/SocialMedia.scss"
import "../components/NavigationDots.scss"

const AppWrap = (Component, idName) => function HOC() {
  return (
    <div id={idName} className="app__container">
        <SocialMedia />
        <div>
          <Component />
        </div>
        <NavigationDots active={idName} />
    </div>
  )
}

export default AppWrap