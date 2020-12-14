import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from './YoutubeTutorial/01_netNinja/components/Header';
import Home from './YoutubeTutorial/01_netNinja/components/Home';
import Base from './YoutubeTutorial/01_netNinja/components/Base';
import Toppings from './YoutubeTutorial/01_netNinja/components/Toppings';
import Order from './YoutubeTutorial/01_netNinja/components/Order';

function App() {
  const [pizza, setPizza] = useState({ base: "", toppings: [] });

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
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/base">
          <Base addBase={addBase} pizza={pizza} />
        </Route>
        <Route path="/toppings">
          <Toppings addTopping={addTopping} pizza={pizza} />
        </Route>
        <Route path="/order">
          <Order pizza={pizza} />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;