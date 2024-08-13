import React from 'react';
import { motion } from 'framer-motion';
import "./home.css";
import Me from "../../assets/Avatar1.svg";
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';
// import Shapes from './Shapes';

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      transition: {
        duration: 1.2,
        ease: "easeOut",
        delay: 0.5,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: {
        duration: 1,
        ease: "easeOut",
        delay: 0.3,
      },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0px 0px 20px rgba(0,0,0,0.3)",
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
    glow: {
      boxShadow: "0 0 15px rgba(0, 123, 255, 0.7)",
      transition: {
        duration: 1,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  };

  return (
    <section className="home container" id="home">
      <motion.div 
        className="intro"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div 
          className="home__background" 
          initial={{ backgroundPosition: '0% 0%' }}
          animate={{ backgroundPosition: '100% 100%' }}
          transition={{ duration: 5, ease: "linear", repeat: Infinity }}
        />
        <motion.img 
          src={Me} 
          alt='' 
          className='home__img'
          variants={imageVariants}
          initial="hidden"
          animate="visible"
        />
        <motion.h1 
          className='home__name'
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          Aishwarya Joshi
        </motion.h1>
        <motion.span 
          className='home__education'
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          I'm a Front-End Developer
        </motion.span>
        
        <HeaderSocials />

        <motion.a 
          href="#contact" 
          className="btn"
          variants={buttonVariants}
          whileHover="hover"
          // animate="glow"
        >
          Hire Me!
        </motion.a>

        <ScrollDown />
      </motion.div>
      {/* <Shapes /> */}
    </section>
  )
}

export default Home;
