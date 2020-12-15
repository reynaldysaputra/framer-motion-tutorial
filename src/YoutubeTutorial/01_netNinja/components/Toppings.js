import React from 'react';
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion';
import { animationChildrenTopings, animationContainer, animationText } from './animate';
import DocumentTitle from 'react-document-title';

const Toppings = ({ addTopping, pizza, location }) => {
  let toppings = ['mushrooms', 'peppers', 'onions', 'olives', 'extra cheese', 'tomatoes'];

  return (
    <DocumentTitle title='Toppings'>
      <motion.div 
        className="toppings container"       
        initial='initial'
        animate='animate'
        custom={location}
        variants={animationContainer}
        exit='exit'
      >
        <h3>Step 2: Choose Toppings</h3>
        <ul>
          {toppings.map(topping => {
            let spanClass = pizza.toppings.includes(topping) ? 'active' : '';
            return (
              <motion.li key={topping} onClick={() => addTopping(topping)} 
                transition='transitions' 
                whileHover='whileHover' 
                variants={animationText}
              >
                <span className={spanClass}>{ topping }</span>
              </motion.li>
            )
          })}
        </ul>
        
        {pizza.toppings.length != 0 && 
          <Link to="/order">
            <motion.button variants={animationChildrenTopings} whileHover='whileHover'>
              Order
            </motion.button>
          </Link>
        }

      </motion.div>
    </DocumentTitle>
  )
}

export default Toppings;