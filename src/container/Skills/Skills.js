import React, {useState, useEffect} from 'react'
import "./Skills.scss"
import {motion} from "framer-motion"
import {urlFor, client} from "../../client"
import ReactTooltip from "react-tooltip"
import {AppWrap} from "../../wrapper"

// useEffect(() => {
//     const query = '*[_type == "works"]'

//     client.fetch(query)
//       .then((data) => {
//         setWorks(data)
//         setFilterWork(data)
//       })
//   }, [])



const Skills = () => {
    const [skills, setSkills] = useState([])
    const [experiences, setExperiences] = useState([])
    const [workExperience, setWorkExperience] = useState([])

    useEffect(() => {
        const skillsQuery = '*[_type == "skills"]'
        const experiencesQuery = '*[_type == "experiences"]'
        const workExperienceQuery = '*[_type == "workExperience"]'

        client.fetch(skillsQuery)
            .then((data) => {
                setSkills(data)
            })
        
        client.fetch(experiencesQuery)
            .then((data) => {
                setExperiences(data)
            })
        
        client.fetch(workExperienceQuery)
            .then((data) => {
                setWorkExperience(data)
            })

    }, [])

    const skillsElements = skills?.map((skill, index) => (
        <motion.div
            whileInView={{opacity: [0, 1]}}
            transition={{duration: 0.5, delay: 0.2}}
            className="skills__circle-container"
            key={`Skill-${index}`}
        >
            <div 
                className='skill__circle'
                style={{backgroundColor: skill.bgColor ? skill.bgColor : "#fff"}}
            >
                <img src={urlFor(skill.icon)} alt={`${skill.name} Icon`} />
            </div>
            <p>{skill.name}</p>

        </motion.div>
    ))

    const experienceElements = experiences?.map((experience, index) => (
        <div key={index} className="experience__container">
            <h4 className='experience__year'>{experience.year}</h4>
            <div>
                {experience?.works.map(work => (
                    <>
                        <motion.div 
                            whileInView={{opacity: [0, 1]}}
                            transition={{duration: 0.5}}    
                            key={work.name} 
                            className="work__item"
                            data-tip
                            data-for={work.name}
                        >
                        <h4>{work.name}</h4>
                        <p>{work.company}</p>
                        <ReactTooltip
                            id={work.name}
                            effect="solid"
                            arrowColor="#fff"
                            className='skills-tooltip'
                        >
                            {work.desc}
                        </ReactTooltip>
                    </motion.div>
                    </>
                    
                ))}
            </div>
        </div>
    ))
    
    console.log(experiences)

    return (
        <div
            className="skills__container"
            id="skills"
        >
            <motion.div 
                whileInView={{y: [100, 0], opacity: [0, 1]}}
                transition={{duration: 0.3}}
                className='skills__header'
            >
                <h2>Skills & <span>Experiences</span></h2>
            </motion.div>
            <div className='work__skills-experiences'>
                <motion.div
                    whileInView={{opacity: [0, 1]}}
                    transition={{duration: 0.5}}
                    className="skills__skills-container"
                >
                    {skillsElements}
                </motion.div>
                <motion.div
                    whileInView={{y: [100, 0], opacity: [0, 1]}}
                    transition={{duration: 0.5}}
                    className="skills__experiences-container"
                >
                    {experienceElements}
                </motion.div>
            </div>
            
        </div>
    )
}

export default AppWrap(Skills, "skills")