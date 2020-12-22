import React from 'react';
import Dragers from '../02_Gestures/drag';
import ScrollingElement from '../03_motionValue/useElementScroll';
import MotionValues from '../03_motionValue/useMotion';
import Springs from '../03_motionValue/useSpring';
import ViewPortScroll from '../03_motionValue/useViewPortScroll';
// import LayoutAnimation from './04_layoutAnimation';

function Containers() {
    return(
        <div className='containers'>
            <ViewPortScroll/>
        </div>
    )
}

export default Containers;