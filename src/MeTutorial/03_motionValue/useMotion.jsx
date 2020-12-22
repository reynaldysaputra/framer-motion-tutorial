import React, { useEffect } from 'react';
import { Fragment } from 'react';
import { motion, transform, useMotionValue, useTransform } from 'framer-motion';

function MotionValues() {
    const scale = useMotionValue(2);
    const x = useMotionValue(-200);
    const y = useTransform(x, value => value * 2);

    const scaleBox = () => {
        scale.set(2);
        x.set(-100);
    }

    const scaleBox2 = () => {
        x.set(-200);
    }

    const xRange = [-200, -100, 100, 200]
    const opacityRange = [1, 0, 1, 0]
    const opacity = useTransform(x, xRange, opacityRange)

    return(
        <Fragment>
            {console.log(opacity)}
            <motion.div 
                style={{
                    scale, 
                    y,
                    background:'red',
                    width : 100,
                    height : 100
                }}
                animate={{transition:{duration:.5}}}
            ></motion.div>

            <motion.div 
                style={{
                    scale, 
                    opacity : opacity,
                    background:'green',
                    width : 100,
                    height : 100
                }}
                animate={{transition:{duration:.5}}}
            ></motion.div>

            <button onClick={scaleBox} style={{height:100}}>Scale box</button>
            <button onClick={scaleBox2} style={{height:100}}>Scale box2</button>
        </Fragment>
    )
}

export default MotionValues;