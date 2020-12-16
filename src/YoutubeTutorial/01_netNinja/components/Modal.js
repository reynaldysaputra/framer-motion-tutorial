import React from 'react';
import {AnimatePresence, motion} from 'framer-motion';
import { useHistory } from 'react-router-dom';

function Modal({showModal, setShowModal}) {
    const history= useHistory();

    return(
        <AnimatePresence exitBeforeEnter={true}>
            {showModal && (
                <motion.div 
                    className='modal'
                    initial={{opacity : 0}}
                    animate={{opacity:1}}
                    exit={{opacity:0}}
                >
                    <motion.div className="box" 
                        initial={{y : '-100vh', opacity:0}} 
                        animate={{y : 0, opacity:1, transition:{duration:.3, type:'spring', stiffness : 140}}} 
                        exit={{y:'-100vh'}}
                    >
                        <h3>Want make another pizza ?</h3>
                        <button onClick={() => {
                            history.push('/');
                        }}>Start Again</button>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default React.memo(Modal);