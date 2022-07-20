import React, {useState} from 'react'
import "./Contact.scss"
import {motion} from "framer-motion"
import {AppWrap} from "../../wrapper"
import {client} from "../../client"


const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    })
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [isLoading, setIsloading] = useState(false)

    function handleChange(event) {
        const {name, value} = event.target
        setFormData(prevData => (
            {
                ...prevData,
                [name]: value
            }
        ))
    }

    function handleSubmit(event) {
        event.preventDefault()
        setIsloading(true)
            const contact = {
                _type: "contact",
                name: formData.name,
                email: formData.email,
                message: formData.message
            }

            client.create(contact)
                .then(() => {
                    setIsloading(false)
                    setIsSubmitted(true)
                    setFormData({
                        name: "",
                        email: "",
                        message: ""
                    })
                    setTimeout(() => {
                        setIsSubmitted(false)
                    }, 3000)
                })
    }

    return (
        <div className='container'>
            <div className='contact__container' id="contact">
                <motion.div
                    whileInView={{opacity: [0, 1]}}
                    transition={{duration: 0.5}}
                    className="contact__container-transition"
                >
                    <div className='contact__header'>
                        <h2>Grab A Coffee & <span>Chat With Me</span></h2>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <input 
                            type="text" 
                            placeholder='Your Name'
                            name="name"
                            onChange={handleChange}
                            value={formData.name}
                        />
                        <input 
                            type="email" 
                            placeholder='Email'
                            name="email"
                            onChange={handleChange}
                            value={formData.email}
                        />
                        <textarea 
                            placeholder='Your Message'
                            name="message"
                            onChange={handleChange}
                            value={formData.message}
                        />
                        <button>{isLoading ? "Sending..." : "Send Message"}</button>
                        {isSubmitted && (
                        <motion.div
                            whileInView={{x: [100, 0], opacity: [0, 1]}}
                            transition={{duration: 0.5}}
                        >
                            <h4 className='contact__message'>Message Submitted!</h4>
                        </motion.div>
                        )}
                    </form>
                
                </motion.div>
            </div>
        </div>
        
    )
}

export default AppWrap(Contact, "contact")