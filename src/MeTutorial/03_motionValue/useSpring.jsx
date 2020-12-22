import { motion, useMotionValue, useSpring } from 'framer-motion';
import React, { useState } from 'react';
import { Fragment } from 'react';

function Springs() {
    const x = useSpring(0, { stiffness: 300 })
    const [state, setState] = useState(1);
    const spring = useSpring(x, {damping : x.current, duration : .5,restSpeed : 3});
    const handleSprings = () => {
        setState(state+50);
        x.set(state);
        console.log(spring);
    }

    return(
        <Fragment>
            {console.log(x.current)}
            <motion.div className="boxKotak" style={{x:spring}}></motion.div>

            <button onClick={handleSprings} >Klik</button>
        </Fragment>
    )
}

export default Springs;