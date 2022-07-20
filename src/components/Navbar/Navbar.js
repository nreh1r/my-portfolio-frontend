import React, {useState} from 'react'
import {images} from "../../constants"
import {HiMenuAlt4, HiX} from "react-icons/hi"
import {motion} from "framer-motion"

import "./Navbar.scss"

const Navbar = () => {
    const [toggle, setToggle] = useState(false)

    const navbarLinks = ["home", "work", "skills", "about", "contact"].map((item) => (
        <li key={`link-${item}`} className="navbar__link">
            <div />
            <a href={`#${item}`} onClick={() => setToggle(false)}>{item}</a>
        </li>
    ))

    const menuLinks = ["home", "work", "skills", "about", "contact"].map((item) => (
        <li key={`menu-${item}`} className="menu__link">
            <a href={`#${item}`} onClick={() => setToggle(false)}>{item}</a>
        </li>
    ))

  return (
    <nav className='navbar__container'>
        <div className='name__logo'>
            <a href="#">
                <img src={images.Name_logo} alt="Name Logo" />
            </a>
        </div>
        <div className='image__container'>
        <ul className='navbar__links-main'>
            {navbarLinks}
        </ul>
        </div>
        <div className='navbar__menu'>
            <HiMenuAlt4 onClick={() => setToggle(true)} />

            {
                toggle && (
                    <motion.div
                        whileInView={{x: [300, 0]}}
                        transition={{duration: 0.85, ease: "easeOut"}}
                    >
                        <HiX onClick={() => setToggle(false)}/>
                        <ul>
                            {menuLinks}
                        </ul>
                    </motion.div>
                )
            }
        </div>
    </nav>
  )
}

export default Navbar