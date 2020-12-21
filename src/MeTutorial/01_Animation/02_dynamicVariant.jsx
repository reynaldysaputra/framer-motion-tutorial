import React from 'react';
import {motion} from 'framer-motion';
import {user} from './obj/user';

const variants = {
    hidden : {
        opacity : 0
    },
    visible : {
        opacity : 1
    }
}

const animateChildren = {
    hidden : {
        opacity : 0,
        y : 20
    },
    visible : index => ({
        opacity : 1,
        y : 0,
        transition : {
            duration : index * .3,
            delay : index * .2,
            type : 'ease',
        }
    })
}

function DynamicVariant() {
    return(
        <motion.div className='card' variants={variants} initial='hidden' animate='visible'>
            {user.map((item,index) => (
                <motion.div key={index} variants={animateChildren} custom={index}>
                    <h2>{item.name}</h2>
                    <p>{item.job}</p>
                </motion.div>
            ))}
        </motion.div>
    )
}

export default DynamicVariant;