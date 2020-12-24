import { motion, useCycle } from 'framer-motion';
import React from 'react';
import { Fragment } from 'react';

const variantsAnimation = {
    animationOne : {
        y : [0,100,50,150,100,200],
        x : 0,
        transition : {
            y : {
                yoyo : Infinity,
                duration : 3,
                delay : .5,
            }
        }
    },
    animationTwo : {
        y : 0,
        x : [0,100,50,150,100,200],
        transition : {
            x : {
                yoyo : Infinity,
                duration : 3,
            }
        }
    }
}

function CycleFramer() {
    const [animation, SetCycle] = useCycle('animationOne', 'animationTwo');

    return(
        <Fragment>
            <motion.div
                style = {{width : 100, height : 100, background:'red'}}
                variants={variantsAnimation}
                animate={animation}
            >

            </motion.div>

            <button onClick={() => SetCycle()}>Klik</button>
        </Fragment>
    )
}

export default CycleFramer;