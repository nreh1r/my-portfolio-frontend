import React, {useState, useEffect} from 'react'
import "./About.scss"
import {motion} from "framer-motion"
import {client, urlFor} from "../../client"
import {AppWrap} from "../../wrapper"

const About = () => {
    const [abouts, setAbouts] = useState([])

    useEffect(() => {
        const query = '*[_type == "abouts"]'

        client.fetch(query)
            .then(data => {
                setAbouts(data)
            })
    }, [])

    const aboutElements = abouts?.map((about, index) => (
        <motion.div
            whileHover={{scale: [1, 1.1]}}
            transition={{duration: 0.5}}
            key={`About-${index}`}
            className="about__container"
        >
            <div className='about__img-container'>
                <img src={urlFor(about.imgUrl)} alt={`About-${index} Photo`} className="about__img" />
            </div>
            <h4>{about.title}</h4>
            <p>{about.description}</p>
        </motion.div>
    ))

    return (
        <div class="about__background-container" id="about">
                <motion.div
                whileInView={{opacity: [0, 1]}}
                transition={{duration: 0.5}}
                className="about__container-main"
            >
                <div className='about__header'>
                    <h2>I Know That <span>Good Design </span> Means <span>Good Business</span></h2>
                </div>
                <div className='about__elements'>
                {aboutElements}
                </div>
            </motion.div>
        </div>
    )
}

export default AppWrap(About, "about")