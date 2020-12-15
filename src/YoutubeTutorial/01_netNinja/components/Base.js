import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {motion} from 'framer-motion';
import { animationButton, animationButtonKeyFramesYoyo, animationChildren, animationContainer, animationText } from './animate';
import DocumentTitle from 'react-document-title';

const Base = ({ addBase, pizza, location }) => {
  const bases = ['Classic', 'Thin & Crispy', 'Thick Crust'];

  return (
    <DocumentTitle title='Base'>
      <motion.div 
        className="base container"
        initial='initial'
        custom={location}
        animate='animate'
        variants={animationContainer}
        exit='exit'
      >
        {console.log(location)}
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
                variants={animationButtonKeyFramesYoyo}
              >Next</motion.button>
            </Link>
          </motion.div>
        )}

      </motion.div>
    </DocumentTitle>
  )
}

export default Base;