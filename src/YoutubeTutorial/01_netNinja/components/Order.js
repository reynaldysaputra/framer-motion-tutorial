import React, { Fragment, useState } from 'react';
import { animationChildren2, animationContainer2 } from './animate';
import {motion} from 'framer-motion';
import Modal from './Modal';
import { useEffect } from 'react';

const Order = ({ pizza, location, setShowModal }) => {
  useEffect(() => {
    setTimeout(() => {
        setShowModal(true);
    }, 3000)
  }, [])

  return (
    <Fragment>
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

    </Fragment>
  )
}

export default Order;