import React from 'react';
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion';
import { animationButtonKeyFramesYoyo,animationContainerHome } from './animate';
import DocumentTitle from 'react-document-title';

const Home = ({location}) => {
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
      </motion.div>
    </DocumentTitle>
  )
}

export default Home;