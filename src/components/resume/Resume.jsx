// import React from 'react';
// import "./resume.css"; // Ensure this import is correct
// import Data from './Data';
// import Card from './Card';

// const Resume = () => {
  
//   const collegeData = Data.filter(item => item.id === 2 || item.id=== 3);
//   const schoolingData = Data.filter(item => item.id=== 1);

//   return (
//     <section className="resume container section" id="resume">
//       <h2 className="section__title">Education</h2>

//       <div className="resume__container">
//         <div className="timeline">
//           {collegeData.map((val, id) => (
//             <div className="timeline_item" key={id}>
//               <Card 
//                 icon={val.icon}
//                 title={val.title} 
//                 year={val.year} 
//                 desc={val.desc} 
//                 cgpa={val.cgpa}
//               />
//             </div>
//           ))}
//         </div>

//         <div className="timeline">
//           {schoolingData.map((val, id) => (
//             <div className="timeline_item" key={id}>
//               <Card 
//                 icon={val.icon}
//                 title={val.title} 
//                 year={val.year} 
//                 desc={val.desc} 
//                 cgpa={val.cgpa}
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Resume;


import React from 'react';
import { motion } from 'framer-motion';
import "./resume.css"; // Ensure this import is correct
import Data from './Data';
import Card from './Card';

const Resume = () => {
  
  const collegeData = Data.filter(item => item.id === 2 || item.id=== 3);
  const schoolingData = Data.filter(item => item.id=== 1);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const leftItemVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.8, ease: "easeOut" }
    },
  };

  const rightItemVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.8, ease: "easeOut" }
    },
  };

  const iconVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="resume container section" id="resume">
      <h2 className="section__title">Education</h2>

      <motion.div 
        className="resume__container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="timeline">
          {collegeData.map((val, id) => (
            <motion.div 
              className="timeline_item" 
              key={id} 
              variants={id % 2 === 0 ? leftItemVariants : rightItemVariants}
            >
              <motion.div variants={iconVariants}>
                <Card 
                  icon={val.icon}
                  title={val.title} 
                  year={val.year} 
                  desc={val.desc} 
                  cgpa={val.cgpa}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        <div className="timeline">
          {schoolingData.map((val, id) => (
            <motion.div 
              className="timeline_item" 
              key={id} 
              variants={id % 2 === 0 ? leftItemVariants : rightItemVariants}
            >
              <motion.div variants={iconVariants}>
                <Card 
                  icon={val.icon}
                  title={val.title} 
                  year={val.year} 
                  desc={val.desc} 
                  cgpa={val.cgpa}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Resume;

