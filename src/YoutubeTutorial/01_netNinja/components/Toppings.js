import React from 'react';
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion';
import { animationContainer, animationText } from './animate';

const Toppings = ({ addTopping, pizza }) => {
  let toppings = ['mushrooms', 'peppers', 'onions', 'olives', 'extra cheese', 'tomatoes'];

  return (
    <motion.div 
      className="toppings container"       
      initial='initial'
      animate='animate'
      variants={animationContainer}
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

      <Link to="/order">
        <button>
          Order
        </button>
      </Link>

    </motion.div>
  )
}

export default Toppings;