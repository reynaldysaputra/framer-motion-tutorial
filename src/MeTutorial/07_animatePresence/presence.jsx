import React, { useState } from 'react';
import { Fragment } from 'react';
import { motion ,AnimatePresence } from 'framer-motion';

function Presence() {
    const [state, setState] = useState(false);
    return(
        <Fragment>
            <button onClick={() => setState(true)}>Klik modal</button>

            <AnimatePresence initial={false}>
                {state && (
                    <motion.div className="modal" key='modal'
                        initial={{opacity:0}} animate={{opacity : 1}} exit={{opacity: 0, transition:{delay:.3}}}>
                        <motion.div className="contentModal" exit={{y : '-100vh'}}>
                            <h1>Okay</h1>
                            <button onClick={() => setState(false)}>Close</button>
                        </motion.div>
                    </motion.div>
                )}
                {console.log(state)}
            </AnimatePresence>
        </Fragment>
    )
}

export default Presence;