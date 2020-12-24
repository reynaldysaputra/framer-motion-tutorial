import { motion } from 'framer-motion';
import React, {Fragment} from 'react';

const parent = {
    hidden : {
        x : -500,
        opacity : 0,
    },
    visible : {
        x : 500,
        opacity : 1,
        background : 'white',
        transition : {
            delay : .5,
            when : 'beforeChildren',
            duration : .5,
            staggerChildren : 1,
            staggerDelay : .5,
            staggerDirection : -1
        }
    }
}

const child = {
    hidden : {
        opacity : 0,
        y : 20
    },
    visible : {
        opacity : 1,
        y : 0,
        color: 'black',
        fontWeight : 'bold'
    }
}

function TypesAnimation() {
    return(
        <Fragment>
            {/* Step 1 */}
            <motion.ul variants={parent} initial='hidden' animate='visible'>
                <motion.li variants={child}>A</motion.li>
                <motion.li variants={child}>B</motion.li>
                <motion.li variants={child}>C</motion.li>
            </motion.ul>

            {/* Step 2 */}
            <motion.div 
                className="ball" 
                style={{background:'yellow'}}
                animate={{rotate : 150}}
                transition={{
                    repeat : 3, 
                    repeatType : 'reverse',
                    repeatDelay : 2,
                    duration : 1,
                    type : 'tween'
                }}
            >
            </motion.div>

            {/* Step 3 */}
            <motion.div
                style={{width:'50%', height:'200px', margin:'auto', background:'salmon'}}
                initial={{scale:0}}
                animate={{scale:1}}
                transition={{ease:[1.000, 0.000, 0.000, 1.000], duration:.8, repeat:Infinity, repeatType:'reverse'}}
            >
            </motion.div>

            {/* Step 4 */}
            <motion.div
                style={{width:50, height:50, borderRadius:'50%', background:'red', margin:'auto', marginTop:90}}
                animate={{x:500}}
                transition={{
                    type:'spring', 
                    // bounce:.5, 
                    // damping : 10,
                    // mass:1,
                    stiffness:150, 
                    velocity:1,
                    restSpeed : 13113,
                    repeat:Infinity, 
                    repeatType:'reverse', 
                    duration:1
                }}
            >
            </motion.div>
        </Fragment>
    )
}

export default TypesAnimation;