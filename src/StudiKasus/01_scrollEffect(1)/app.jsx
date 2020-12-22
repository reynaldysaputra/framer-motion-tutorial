import { motion, useTransform, useViewportScroll } from 'framer-motion';
import React from 'react';
import { Fragment } from 'react';

function Applications() {
    const {scrollYProgress} = useViewportScroll();
    const scrollTransform = useTransform(scrollYProgress, [0,1], [1,1.5])

    return(
        <Fragment>
            <div className="frameImage">
                <div className="boxImage">
                    <motion.img 
                        src="https://otc-fahrenheit.co.id/wp-content/uploads/2020/04/mata.jpg"
                        initial={{scale : 0, opacity : 0}}
                        animate={{scale:1, opacity:1, transition:{duration:.5}}}
                        style={{width:'100%', y : '-30vh', transition : .5, scale : scrollTransform}}
                    />
                </div>
            </div>
        </Fragment>
    )
}

export default Applications;