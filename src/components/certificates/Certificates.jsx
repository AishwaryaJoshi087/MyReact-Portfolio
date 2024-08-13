// import React from 'react';
// import "./certificates.css";
// import Image1 from "../../assets/DSA.svg";
// import Image2 from "../../assets/python_coursera.svg";
// import Image3 from "../../assets/MATLAB_1.svg";
// import Image4 from"../../assets/excel_vac.svg";

// const Certificates = () => {
//   return (
//     <section className="certificate container section" id='certificates'> 
//       <h2 className="section__title">Certificates</h2>

//       <div className="certificate__container grid">
//         <div className="certificate__item">
//           <img src={Image1} alt="" className="certificate__img" />
//           <h3 className="certificate__plan"></h3>
//           <p className="certificate__title"></p>
//           <p className="certificate__support"></p>
//           {/* <h3 className="price">
//             <em>$</em> 9 <span>Month</span>
//           </h3>
//           <a href="" className="btn">Get Started</a> */}
//         </div>

//         <div className="certificate__item">
//           <img src={Image2} alt="" className="certificate__img" />
//           <h3 className="certificate__plan"></h3>
//           <p className="certificate__title"></p>
//           <p className="certificate__support"></p>
          
//         </div>

//         <div className="certificate__item ">
//           <img src={Image3} alt="" className="certificate__img" />
//           <h3 className="certificate__plan"></h3>
//           <p className="certificate__title"></p>
//           <p className="certificate__support"></p>
          
//         </div>

//         <div className="certificate__item">
//           <img src={Image4} alt="" className="certificate__img" />
//           <h3 className="certificate__plan"></h3>
//           <p className="certificate__title"></p>
//           <p className="certificate__support"></p>
         
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Certificates;



import React from 'react';
import { motion } from 'framer-motion';
import "./certificates.css";
import Image1 from "../../assets/DSA.svg";
import Image2 from "../../assets/python_coursera.svg";
import Image3 from "../../assets/MATLAB_1.svg";
import Image4 from "../../assets/excel_vac.svg";

const Certificates = () => {
  const scaleUp = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <section className="certificate container section" id='certificates'> 
      <h2 className="section__title">Certificates</h2>

      <div className="certificate__container grid">
        <motion.div
          className="certificate__item"
          variants={scaleUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <img src={Image1} alt="" className="certificate__img" />
          <h3 className="certificate__plan"></h3>
          <p className="certificate__title">DSA Certification</p>
          {/* <p className="certificate__support">Completed DSA course on Data Structures and Algorithms.</p> */}
        </motion.div>

        <motion.div
          className="certificate__item"
          variants={scaleUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <img src={Image2} alt="" className="certificate__img" />
          <h3 className="certificate__plan"></h3>
          <p className="certificate__title">Python Course</p>
          {/* <p className="certificate__support">Completed Python course on Coursera.</p> */}
        </motion.div>

        <motion.div
          className="certificate__item"
          variants={scaleUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <img src={Image3} alt="" className="certificate__img" />
          <h3 className="certificate__plan"></h3>
          <p className="certificate__title">MATLAB Certification</p>
          {/* <p className="certificate__support">Certified in MATLAB programming.</p> */}
        </motion.div>

        <motion.div
          className="certificate__item"
          variants={scaleUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <img src={Image4} alt="" className="certificate__img" />
          <h3 className="certificate__plan"></h3>
          <p className="certificate__title">Excel VBA Certification</p>
          {/* <p className="certificate__support">Excel VBA course completed successfully.</p> */}
        </motion.div>
      </div>
    </section>
  )
}

export default Certificates;

