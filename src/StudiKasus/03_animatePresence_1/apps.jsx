import { motion, AnimatePresence } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { Fragment } from 'react';

const imgArray = ['https://upload.wikimedia.org/wikipedia/commons/3/35/Neckertal_20150527-6384.jpg','https://llandscapes-10674.kxcdn.com/wp-content/uploads/2019/07/lighting.jpg','https://i1.wp.com/www.ufn.ca/wp-content/uploads/2019/08/landscape-mountains.jpg?fit=800%2C333&w=640','https://iso.500px.com/wp-content/uploads/2014/07/big-one.jpg']

function Training1() {
    const [state, setIndex] = useState(0);

    useEffect(() => {
        const timeOut = setTimeout(() => {
            setIndex(state+1);
        }, 2000);
        
        if(state === imgArray.length) setIndex(0); 
    },[state])

    return(
        <Fragment>
            <div className="containers">
                <div className="figureBox">
                    <AnimatePresence initial={false}>
                        {imgArray.map((item,index) => (
                            (state === index && <motion.img src={item} key={item} initial={{x:1000}} animate={{x:0, transition:{type:'spring', stiffness:30, duration:1}}} exit={{x:-1000, transition:{type:'spring', stiffness:30, duration:1}}}/>)
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </Fragment>
    )
}

export default Training1;