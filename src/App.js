import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/home/home' ;

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home}/>
      </Switch>
      
    </BrowserRouter>
  );
}

export default App;
