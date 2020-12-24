import React, { useState } from 'react';
import { Fragment } from 'react';
import { AnimateSharedLayout, motion } from 'framer-motion';

function BasicSharedLayout() {
    return(
        <Fragment>
            <AnimateSharedLayout>
                <motion.ul style={{width:100,background : 'blue', display : 'flex', justifyContent:'center'}} layout>
                    <p>s</p>
                    <Item content='Hello word' />
                </motion.ul>
            </AnimateSharedLayout>
        </Fragment>
    )
}

function Item({ content }) {
    const [isOpen, setIsOpen] = useState(true)
  
    return <motion.div layout onClick={() => setIsOpen(!isOpen)} initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}>{isOpen && content}</motion.div>
  }

export default BasicSharedLayout;