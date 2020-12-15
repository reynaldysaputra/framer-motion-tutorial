import React, { Fragment, useState } from 'react';
import { BrowserRouter, Route, Switch, useLocation} from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home';
import Base from './components/Base';
import Toppings from './components/Toppings';
import Order from './components/Order';
import { AnimatePresence } from 'framer-motion';

function App() {
  const [pizza, setPizza] = useState({ base: "", toppings: [] });
  const lokasi = useLocation();

  const addBase = (base) => {
    setPizza({ ...pizza, base })
  }
  
  const addTopping = (topping) => {
    let newToppings;
    if(!pizza.toppings.includes(topping)){
      newToppings = [...pizza.toppings, topping];
    } else {
      newToppings = pizza.toppings.filter(item => item !== topping);
    }
    setPizza({ ...pizza, toppings: newToppings });
  }

  return (
    <Fragment>
      <Header />
      <AnimatePresence exitBeforeEnter custom={lokasi}>
        <Switch location={lokasi} key={lokasi.key}>
          <Route path="/base">
            <Base addBase={addBase} pizza={pizza} location={lokasi} />
          </Route>
          <Route path="/toppings">
            <Toppings addTopping={addTopping} pizza={pizza} location={lokasi} />
          </Route>
          <Route path="/order">
            <Order pizza={pizza} location={lokasi} />
          </Route>
          <Route path="/" >
            <Home location={lokasi} />
          </Route>
        </Switch>
      </AnimatePresence>
    </Fragment>
  );
}

export default App;