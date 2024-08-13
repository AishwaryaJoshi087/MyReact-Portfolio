import React from 'react';
import { motion } from 'framer-motion';
import { containerVariants, cardVariants } from './Framer_skills'; 
import "./skills.css";
import Image1 from "../../assets/development.svg";
import Image2 from "../../assets/java.svg";
import Image3 from "../../assets/machine-learning.svg";
import Image4 from "../../assets/connection.svg";
import Image5 from "../../assets/science.svg";

const data = [
  { id: 1, image: Image1, title: "Web Development", description: "" },
  { id: 2, image: Image2, title: "Java", description: "" },
  { id: 3, image: Image3, title: "Machine Learning", description: "" },
  { id: 4, image: Image4, title: "Data Structures", description: "" },
  { id: 5, image: Image5, title: "React", description: "" },
];

const Skills = () => {
  return (
    <motion.section
      className="services container section"
      id='services'
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <h2 className="section__title">Competencies</h2>

      <div className="services__container grid">
        {data.map(({ id, image, title, description }, index) => (
          <motion.div
            className="services__card"
            key={id}
            custom={index}  // Pass the index to the variants
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true, amount: 0.59}}
          >
            <img src={image} alt={title} className="services__img" />
            <h3 className="services__title">{title}</h3>
            <p className="services__description">{description}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default Skills;
