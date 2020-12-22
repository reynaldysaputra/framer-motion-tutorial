import React from 'react';
import { Fragment } from 'react';
import {motion, useMotionValue, useViewportScroll} from 'framer-motion';

function ViewPortScroll() {
    const y = useMotionValue(100);
    const {scrollY} = useViewportScroll();

    return(
        <Fragment>
            <motion.div 
                className="ball" 
                initial={{y : '-1000vh', opacity : 0}}
                animate={{y : 0, opacity : 1 ,transition:{duration:.5}}}
                style={{y : scrollY}}
            ></motion.div>
        </Fragment>
    )
}

export default ViewPortScroll;