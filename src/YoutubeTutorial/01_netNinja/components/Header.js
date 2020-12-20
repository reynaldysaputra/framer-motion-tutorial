import React from 'react';
import {motion} from 'framer-motion';
import { animationSVG, animationSVGPath } from './animate';

const Header = () => {
  return (
    <header>
      <div className="logo">
        <motion.svg className="pizza-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" variants={animationSVG} initial='initial' animate='visible'>
          <motion.path
            fill="none"
            d="M40 40 L80 40 C80 40 80 80 40 80 C40 80 0 80 0 40 C0 40 0 0 40 0Z"
            variants={animationSVGPath}
          />
          <motion.path
            fill="none"
            d="M50 30 L50 -10 C50 -10 90 -10 90 30 Z"
            variants={animationSVGPath}
          />
        </motion.svg>
      </div>
      <motion.div 
        initial = {{y : -100, opacity : 0, rotate : 180}}
        animate = {{y : 0, opacity : 1, rotate : 0, type : 'spring'}}
        className="title"
      >
        <h1>Pizza Joint</h1>
      </motion.div>
    </header>
  )
}

export default Header;