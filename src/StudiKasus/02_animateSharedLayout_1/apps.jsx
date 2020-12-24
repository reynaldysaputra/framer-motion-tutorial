import React from 'react';
import { Fragment } from 'react';
import { BrowserRouter, NavLink, Route, Switch, useHistory, useLocation, useParams } from 'react-router-dom';
import module from './style.module.css';
import headphones from './headphones.jpg';
import shoes from './shoes.jpg';
import watch from './watch.jpg';
import { AnimateSharedLayout, motion } from 'framer-motion';

const imgArray = [headphones,shoes,watch];

function SharedLayout_1() {    
    return(
        <AnimateSharedLayout>
            <BrowserRouter>
                
                    <Switch>
                        <Route path='/' exact component={Home} />
                        <Route path='/:detailProduct' exact component={DetailProduct} />
                    </Switch>
            </BrowserRouter>
        </AnimateSharedLayout>
    )
}

function Home() {
    const history = useHistory();

    return(
        <Fragment>
            <div className={module.container}>
                <div className={module.boxContainer}>
                    <motion.div className={module.box} layoutId='header'>
                        <h1>My Shop</h1>
                    </motion.div>
                    <div className={module.box}>
                        {['headphones','shoes','watch'].map((item, index) => (
                            <motion.div className={module.figure} whileHover={{scale:1.1}} key={index} layoutId={item}>
                                <img 
                                    src={item === item && imgArray[index]} 
                                    alt={item} 
                                    className={module.img} 
                                    onClick={() => history.push({pathname:`${item}`, state : item === item && imgArray[index]})}
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

function DetailProduct({match}) {
    const history= useHistory();

    return(
        <Fragment>
            {console.log(history)}
            <div className={module.container}>
                <div className={module.boxContainer}>
                    <motion.div className={module.box} layoutId='header'>
                        <h1>{match.params.detailProduct}</h1>
                    </motion.div>
                    <motion.div style={{width : '300px', height:'300px'}} layoutId={match.params.detailProduct}>
                        <img src={history.location.state} alt="" className={module.img}/>
                    </motion.div>
                </div>
            </div>
        </Fragment>
    )
}

export default SharedLayout_1;