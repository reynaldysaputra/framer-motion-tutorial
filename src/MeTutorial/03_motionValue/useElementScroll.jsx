import { motion, useElementScroll } from 'framer-motion';
import React, { useRef } from 'react';
import { Fragment } from 'react';

function ScrollingElement() {
    const refs = useRef();
    const {scrollYProgress} = useElementScroll(refs);
    const {scrollY} = useElementScroll(refs);

    return(
        <Fragment>
            {console.log(scrollY)}
            <div className="parent2" ref={refs}>
                <motion.div className="child2" style={{opacity : scrollYProgress}}></motion.div>
            </div>

            <div className="containerImage" ref={refs}>
                <motion.img 
                    src="https://cdn.pixabay.com/photo/2017/05/13/23/05/img-src-x-2310895_960_720.png" 
                    style={{scale : scrollYProgress > 1 ? 1 : scrollYProgress}} 
                    transition={{duration : 1}}
                />
            </div>
        </Fragment>
    )
}

export default ScrollingElement;