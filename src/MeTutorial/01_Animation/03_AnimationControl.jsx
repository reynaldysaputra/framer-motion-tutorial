import React, { useEffect, useState } from 'react';
import {motion, useAnimation} from 'framer-motion';
import { Fragment } from 'react';

function AnimationControl(){
    const controls = useAnimation();

    const handleAnimationStart = () => {
        controls.start({
            x : [50,0,40,0,30,0,20,0,10,0],
            transition: {
                yoyo : Infinity,
                duration : 1
            }
        })
    }

    const handleAnimationStop = () => {
        controls.stop({
            x : 0,
            opacity : 1
        });
    }

    return(
        <Fragment>
            <motion.h2 animate={controls}>Reynaldy saputra</motion.h2>
            <button onClick={handleAnimationStart}>Klik Animation</button>
            <button onClick={handleAnimationStop}>Stop Animation</button>
        </Fragment>
    )
}

export default AnimationControl;