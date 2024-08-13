import React from 'react';
import { motion } from 'framer-motion';
import "./sidebar.css";
import logo from "../../assets/Logo.svg";

const Sidebar = () => {
  const sidebarVariants = {
    hidden: { x: '-100%', opacity: 0 },
    visible: { 
      x: '0%', 
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const navItemVariants = {
    hover: {
      scale: 1.1,
      // color: '#007bff', // Change color on hover
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  const logoVariants = {
    visible: {
      x : [0, -20, 0], // Bounce effect
      transition: {
        duration: 1.5,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={sidebarVariants}
      className="sidebar"
    >
      <aside className='aside'>
        <motion.div 
          className="logo__dot"
          variants={logoVariants}
          initial="hidden"
          animate="visible"
        >
          <a href="#home" className="nav__logo">
            <img src={logo} alt='' />
          </a>
        </motion.div>

        <nav className="nav">
          <div className="nav__menu">
            <ul className="nav__list">
              <li className="nav__item">
                <motion.a 
                  href="#home" 
                  className="nav__link glowing-icon"
                  whileHover="hover"
                  variants={navItemVariants}
                >
                  <i className="icon-home"></i>
                </motion.a>
              </li>
              <li className="nav__item">
                <motion.a 
                  href="#about" 
                  className="nav__link glowing-icon"
                  whileHover="hover"
                  variants={navItemVariants}
                >
                  <i className="icon-user-female"></i>
                </motion.a>
              </li>
              <li className="nav__item">
                <motion.a 
                  href="#services" 
                  className="nav__link glowing-icon"
                  whileHover="hover"
                  variants={navItemVariants}
                >
                  <i className="icon-graduation"></i>
                </motion.a>
              </li>
              <li className="nav__item">
                <motion.a 
                  href="#resume" 
                  className="nav__link glowing-icon"
                  whileHover="hover"
                  variants={navItemVariants}
                >
                  <i className="icon-envelope"></i>
                </motion.a>
              </li>
              <li className="nav__item">
                <motion.a 
                  href="#projects" 
                  className="nav__link glowing-icon"
                  whileHover="hover"
                  variants={navItemVariants}
                >
                  <i className="icon-trophy"></i>
                </motion.a>
              </li>
              <li className="nav__item">
                <motion.a 
                  href="#certificates" 
                  className="nav__link glowing-icon"
                  whileHover="hover"
                  variants={navItemVariants}
                >
                  <i className="icon-badge"></i>
                </motion.a>
              </li>
              <li className="nav__item">
                <motion.a 
                  href="#contact" 
                  className="nav__link glowing-icon"
                  whileHover="hover"
                  variants={navItemVariants}
                >
                  <i className="icon-phone"></i>
                </motion.a>
              </li>
            </ul>
          </div>
        </nav>
        
        <div className="className">
          <span className="copyright">&copy; 2022 - 2025.</span>
        </div>
      </aside>
    </motion.div>
  );
}

export default Sidebar;
