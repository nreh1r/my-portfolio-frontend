import React from "react";
import { motion } from "framer-motion";
import { images } from "../../constants";
import { AppWrap } from "../../wrapper";
import "./Header.scss";

const Header = () => {
  return (
    <div id="home" className="header__container">
      <div className="header__main-container">
        <div className="header__circle-left">
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="circle-left-1"
          >
            <img src={images.sass} alt="Sass Logo" />
          </motion.div>
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, delay: 0.65 }}
            className="circle-left-2"
          >
            <img src={images.nextjs} alt="Nextjs Logo" />
          </motion.div>
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="circle-left-3"
          >
            <img src={images.react} alt="React Logo" />
          </motion.div>
        </div>
        <motion.div
          whileInView={{ scale: [0, 1], opacity: [0, 1] }}
          transition={{ duration: 0.5, staggerChildren: 0.5 }}
          className="header__circle-main"
        >
          <motion.div
            whileInView={{ x: [-100, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="header__intro header__name"
          >
            <h2>👋</h2>
            <div className="header__text-name">
              <p>Hello My Name Is</p>
              <h1>Nicholas</h1>
            </div>
          </motion.div>
          <motion.div
            whileInView={{ x: [-100, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="header__intro header__description"
          >
            <div className="header__text-description">
              <p>Junior Software Developer</p>
              <p>Web and Blockchain Development</p>
            </div>
          </motion.div>
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="header__resume-button"
          >
            <div className="header__resume">
              <a href="#work">
                <h4>See My Work</h4>
              </a>
            </div>
          </motion.div>
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="scrolldown"
          >
            <span></span>
            <span></span>
            <span></span>
          </motion.div>
        </motion.div>
        <div className="header__circle-right">
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="circle-right-1"
          >
            <img src={images.javascript} alt="JavaScript Logo" />
          </motion.div>
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, delay: 0.65 }}
            className="circle-right-2"
          >
            <img src={images.redux} alt="Redux Logo" />
          </motion.div>
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="circle-right-3"
          >
            <img src={images.css} alt="CSS Logo" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AppWrap(Header, "home");
