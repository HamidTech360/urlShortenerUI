import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/home/home';
import Post from './pages/post/post'
import CreatePost from './pages/createPost/createpost'
import Admin from './pages/admin/admin'
import Login from './pages/login/login'
import Test from './pages/test//login'
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/newpost" component={CreatePost}/>
        <Route path="/post/:id" component={Post}/>
        <Route path="/admin" component={Admin}/>
        <Route path="/login" component={Login}/>
        <Route path="/test" component={Test}/>
        <Route path="/" component={Home}/>
      </Switch>
      
    </BrowserRouter>
  );
}

export default App;
