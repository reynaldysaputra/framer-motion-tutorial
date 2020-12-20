import React from 'react';
import { Link } from 'react-router-dom';
import {motion, useCycle} from 'framer-motion';
import { animationButtonKeyFramesYoyo,animationContainerHome, animationLoader } from './animate';
import DocumentTitle from 'react-document-title';

const Home = () => {
  const [animation, cycleAnimation] = useCycle('animationOne', 'animationTwo');

  return (
    <DocumentTitle title='Home'>
      <motion.div 
        className="home container" 
        initial='hidden'
        animate='visible'
        variants={animationContainerHome}
        exit={{x:'-100vw', transition:{duration:0.2}}}
      >
        <motion.h2>
          Welcome to Pizza Joint
        </motion.h2>
        <Link to="/base">
          <motion.button whileHover='whileHover' variants={animationButtonKeyFramesYoyo}>
            Create Your Pizza
          </motion.button>
        </Link>
        <motion.div className="loader" variants={animationLoader} animate={animation}></motion.div>
        <button onClick={() => cycleAnimation()}>Ganti Gaya Loader</button>
      </motion.div>
    </DocumentTitle>
  )
}

export default Home;