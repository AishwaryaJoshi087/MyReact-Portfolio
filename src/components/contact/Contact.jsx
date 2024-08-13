import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import "./contact.css";

const Contact = () => {
  const form = useRef();

  // Animation variants
  const formVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.3 } }
  };

  const inputVariant = {
    hover: { scale: 1.05, transition: { duration: 0.3 } }
  };

  return (
    <section className="contact container section" id='contact'> 
      <motion.h2 
        className="section__title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Get in Touch
      </motion.h2>

      <div className="contact__container grid">
        <motion.div 
          className="contact__info"
          initial="hidden"
          animate="visible"
          variants={formVariant}
        >
          <h3 className="contact__title">Let's Talk About Everything!</h3>
          <p className="contact_details">Don't Like Forms? Send An Email 👋</p>
        </motion.div>

        <motion.form 
          ref={form} 
          action="https://api.web3forms.com/submit" 
          method="POST"
          className="contact__form"
          initial="hidden"
          animate="visible"
          variants={formVariant}
        >
          <input type="hidden" name="access_key" value="14dfb7ea-3f2f-44ba-8e99-98e07aefd07b" />

          <div className="contact__form-group">
            <motion.div 
              className="contact__form-div"
              whileHover="hover"
              variants={inputVariant}
            >
              <input 
                type="text" 
                name="name" 
                className="contact__form-input" 
                placeholder='Insert Your Name' 
                required 
              />
            </motion.div>

            <motion.div 
              className="contact__form-div"
              whileHover="hover"
              variants={inputVariant}
            >
              <input 
                type="email" 
                name="email" 
                className="contact__form-input" 
                placeholder='Insert Your Mail' 
                required 
              />
            </motion.div>
          </div>
          
          <motion.div 
            className="contact__form-div contact__form-area"
            whileHover="hover"
            variants={inputVariant}
          >
            <textarea 
              name="message" 
              cols="30" 
              rows="10" 
              className='contact__form-input' 
              placeholder='Write Your Message' 
              required
            ></textarea>
          </motion.div>

          <input type="hidden" name="redirect" value="https://web3forms.com/success" />

          <motion.button 
            className="btn" 
            type="submit"
            whileHover={{ scale: 0.875 }}
            transition={{ duration: 0.3 }}
          >
            Send Your Message
          </motion.button>
        </motion.form>
      </div>
    </section>
  )
}

export default Contact;
