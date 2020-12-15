import React from 'react';
import { animationChildren2, animationContainer2 } from './animate';
import {motion} from 'framer-motion';

const Order = ({ pizza, location }) => {
  return (
    <motion.div 
      className="container order"       
      initial='hidden'
      animate='visible'
      custom={location}
      variants={animationContainer2}
      exit='exit'
    >
      <h2>Thank you for your order :)</h2>
      <motion.p variants={animationChildren2}>You ordered a {pizza.base} pizza with:</motion.p>
      <motion.div variants={animationChildren2}>
        {pizza.toppings.map(topping => <div key={topping}>{topping}</div>)}
      </motion.div>
    </motion.div>
  )
}

export default Order;