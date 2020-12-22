import React from 'react';
import { Fragment } from 'react';
import { motion } from 'framer-motion';

const transitionDrag = {
    bounceDamping : 50
}

function Dragers() {
    return(
        <Fragment>
            <motion.div className="balls" 
                drag 
                dragConstraints={{left:0, right:300}} 
                dragElastic={.5}
                dragMomentum={true}
                dragTransition={transitionDrag}
            ></motion.div>
        </Fragment>
    )
}

export default Dragers;