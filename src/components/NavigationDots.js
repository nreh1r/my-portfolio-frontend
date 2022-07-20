import React from 'react'
import "./NavigationDots.scss"

const NavigationDots = ({active}) => {
  
  return (
         
      <div className="navigation__dots">       
            {["home", "work", "skills", "about", "contact"].map((item, index) => (
            <a 
              key={`Sidebar-${index}`}
              href={`#${item}`}
              className="navigation__dots-anchor"
              style={active === item ? {backgroundColor: "rgb(77, 44, 240)"} : {}}
            >{item}</a>
        
            ))}
      </div>
  )
}

export default NavigationDots