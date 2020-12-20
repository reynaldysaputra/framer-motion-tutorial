import React, {Fragment, useState} from 'react';
import {motion} from 'framer-motion';

const animateUL = {
    hidden :{
        opacity : 0,
        transition : {
            staggerChildren : .1,
            staggerDirection : -1,
            delay : 1000
        }
    },
    visible : {
        opacity : 1,
        transition : {
            staggerChildren : .2,
        }
    }
}

const animateLI = {
    hidden : {
        y : 30,
        opacity:0,
        transition: {
            type : 'spring',
        }
    },
    visible : {
        y : 0,
        opacity : 1,
        transition: {
            type : 'spring'
        }
    }
}

function Application_1() {
    const [state1, setState1] = useState(null);

    return(
        <Fragment>
            <div className='container'>
                <motion.div 
                    className='div1'
                    initial={{x : '-100vw'}} 
                    animate={{ x: 0}}
                    whileHover={{scale:1.1}}
                    whileTap={{scale:.9}}
                >Hello word
                </motion.div><br/>
                
                <button onClick={() => setState1(true)}>Klik</button>
                <motion.ul variants={animateUL} animate={state1 ? 'visible' : 'hidden'}>
                    <motion.li variants={animateLI}>Nasi padang</motion.li>
                    <motion.li variants={animateLI}>Nasi goreng</motion.li>
                    <motion.li variants={animateLI}>Ayam bakar</motion.li>
                    <motion.li variants={animateLI}>Jagung</motion.li>
                    <motion.li variants={animateLI} onClick={() => setState1(null)}>close</motion.li>
                </motion.ul>
            </div>
        </Fragment>
    )
}

export default Application_1;