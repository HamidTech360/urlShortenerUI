import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/home/home';
import Post from './pages/post/post'
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/post" component={Post}/>
        <Route path="/" component={Home}/>
      </Switch>
      
    </BrowserRouter>
  );
}

export default App;
