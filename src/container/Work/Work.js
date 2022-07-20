import React, {useState, useEffect} from 'react'
import {urlFor, client} from "../../client"
import {motion} from "framer-motion"
import { AiFillEye, AiFillGithub} from "react-icons/ai"
import {AppWrap} from "../../wrapper"
import "./Work.scss"


const Work = () => {
    const [activeFilter, setActiveFilter] = useState("All")
    const [works, setWorks] = useState([])
    const [animateCard, setAnimateCard] = useState({y: 0, opacity: 1})
    const [filterWork, setFilterWork] = useState([])

    useEffect(() => {
        const query = '*[_type == "works"]'
    
        client.fetch(query)
          .then((data) => {
            setWorks(data)
            setFilterWork(data)
          })
      }, [])

      function filter(item) {
        setActiveFilter(item)
        setAnimateCard({y:100, opacity: 0})
        setTimeout(() => {
            item === "All" ? setFilterWork(works) :
            setFilterWork(works.filter(work => work.tags.includes(item)))
            setAnimateCard({y: 0, opacity: 1})
        }, 500)
        
      }
    
      
    const filterButtons = ["UI/UX", "Web App", "Blockchain", "React", "All"].map((item, index) => (
        <div 
            key={index} 
            className={`work__button ${activeFilter === item ? "active" : ""}`}
            onClick={() => filter(item)}
        >
            {item}
        </div>
    ))
    
    const workCards = filterWork.map((work, index) => (
        <div className='work__card-container' key={index}>
            <div className='work__card-img'>
                <img src={urlFor(work.imgUrl)} alt={work.name} className="work__img"/>
                <motion.div
                    whileHover={{opacity: [0, 1]}}
                    transition={{duration: 0.25, ease: "easeInOut", staggerChildren: 0.5}}
                    className="card__hover-images"
                >
                    <a href={work.projectLink} target="_blank" rel="noreferrer">
                        <motion.div
                            whileInView={{scale: [0, 1]}}
                            whileHover={{scale: [1, 0.9]}}
                            transition={{duration: 0.25}}
                            className="work__link"
                        >
                            <AiFillEye />
                        </motion.div>
                    </a>
                    <a href={work.codeLink} target="_blank" rel="noreferrer">
                        <motion.div
                            whileInView={{scale: [0, 1]}}
                            whileHover={{scale: [1, 0.9]}}
                            transition={{duration: 0.25}}
                            className="work__github"
                        >
                            <AiFillGithub/>
                    </motion.div>
                    </a>
                    
                </motion.div>
            </div>
            <div className='work__content'>
                <h4 className="work__title">{work.title}</h4>
                <p className="work__description">{work.description}</p>

                <div className='work__tag'>
                    <p className='work-tag'>{work.tags[0]}</p>
                </div>
            </div>
        </div>
        
    ))

  return (
    <div id="work" className='work__container'>
        <h2 className='work__header'>
            My Creative
            <span> Portfolio </span>
            Section
        </h2>
        <div className='work__filter-buttons'>
            {filterButtons}
        </div>
        <motion.div
            animate={animateCard}
            transition={{duration: 0.5, delayChildren: 0.5}}

            className="work__portfolio-container"
        >
            {workCards}
        </motion.div>

    </div>
  )
}

export default AppWrap(Work, "work")