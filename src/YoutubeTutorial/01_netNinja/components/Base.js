import React from 'react';
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion';
import { animationButton, animationChildren, animationContainer, animationText } from './animate';

const Base = ({ addBase, pizza }) => {
  const bases = ['Classic', 'Thin & Crispy', 'Thick Crust'];

  return (
    <motion.div 
      className="base container"
      initial='initial'
      animate='animate'
      variants={animationContainer}
    >

      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map(base => {
          let spanClass = pizza.base === base ? 'active' : '';
          return (
            <motion.li key={base} onClick={() => addBase(base)} transition='transitions' whileHover='whileHover' variants={animationText}>
              <span className={spanClass}>{ base }</span>
            </motion.li>
          )
        })}
      </ul>

      {pizza.base && (
        <motion.div className="next" variants={animationChildren}>
          <Link to="/toppings">
            <motion.button 
              whileHover='whileHover'
              variants={animationButton}
            >Next</motion.button>
          </Link>
        </motion.div>
      )}

    </motion.div>
  )
}

export default Base;