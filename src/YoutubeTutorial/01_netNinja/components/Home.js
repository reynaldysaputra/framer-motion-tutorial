import React from 'react';
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion';
import { animationButton } from './animate';

const Home = () => {
  return (
    <motion.div 
      className="home container" 
      initial={{scale : 0, opacity: 0}}
      animate={{scale : 1 ,opacity: 1}}
      transition={{delay : .5, type:'spring', stiffness : 200}}
    >
      <motion.h2>
        Welcome to Pizza Joint
      </motion.h2>
      <Link to="/base">
        <motion.button whileHover='whileHover' variants={animationButton}>
          Create Your Pizza
        </motion.button>
      </Link>
    </motion.div>
  )
}

export default Home;