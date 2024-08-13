// // Framer_skills.jsx

// import { transform } from "framer-motion";



// export const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.3
//     }
//   }
// };

// export const cardVariants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: { opacity: 1, y: 0 }
// };


export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,  // Time delay between the start of each child's animation
    },
  },
};

export const cardVariants = {
  hidden: { 
    opacity: 0, 
    scale: 0.8, 
    y: 30 
  },
  visible: i => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { 
      duration: 0.6, 
      delay: i * 0.3, // Delay each card by an increasing amount
      ease: "easeOut" 
    }
  }),
  hover: { 
    scale: 1.05, 
    y: -10, 
    transition: { 
      type: "spring", 
      stiffness: 300 
    } 
  },
};

