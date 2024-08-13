import React from 'react';
import { motion } from 'framer-motion';
import "./about.css";
import Image from "../../assets/About.avatar.svg";
import AboutBox from './AboutBox';

const About = () => {
  const text = "Hi, I’m Aishwarya Joshi, an enthusiastic Front-End Web Developer from Nagpur, Maharashtra. I’m starting my journey in website design and development, focusing on creating engaging and user-friendly web experiences. I’m learning the ins and outs of web design, building, and customization, and am eager to apply my skills to real-world projects. Additionally, I have a growing interest in competitive programming with Java, where I enjoy solving coding challenges and improving my problem-solving abilities. I’m committed to continuous learning and excited to contribute to innovative web development solutions.";

  const sentence = {
    hidden: { opacity: 1 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.01, // Delay each letter
      },
    },
  };

  const letter = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <div>
      <section className="about container section" id='about'>
        <h2 className="section__title">About Me</h2>

        <div className="about__container grid">
          <img src={Image} alt="" className="about__img" />

          <div className="about__data grid">
            <div className="about__info">
              <motion.p 
                className="about__description"
                variants={sentence}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }} // Trigger animation when in view
              >
                {text.split("").map((char, index) => (
                  <motion.span key={index} variants={letter}>
                    {char === " " ? "\u00A0" : char} {/* Add non-breaking space for better text spacing */}
                  </motion.span>
                ))}
              </motion.p>
              <a href="https://drive.google.com/drive/folders/1JzVCNSLGFkGwmHIZYixYIcSjOzr5m5IN" className="btn">Download Resume</a>
            </div>
          </div>
        </div>
      
        <AboutBox />
      </section>
    </div>
  );
}

export default About;
