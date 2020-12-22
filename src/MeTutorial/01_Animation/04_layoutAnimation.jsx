import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { Fragment } from 'react';

function LayoutAnimation() {
    const [state, setState] = useState(false);
    const [state2, setState2] = useState(false);

    return(
        <Fragment>
            <div className="switch" data-switch={state} onClick={() => setState(!state)}>
                <motion.div className="ball" layout transition={{type:'spring', stiffness : 500, damping:30}}></motion.div>
            </div>

            <motion.div className="parent1" layout data-parent1={state2} onClick={() => setState2(!state2)}>
                <motion.div className="child1" layout></motion.div>
            </motion.div>
        </Fragment>
    )
}

export default LayoutAnimation;