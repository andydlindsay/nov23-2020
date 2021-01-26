// import { useState} from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Products from './Products';

const MyRouter = () => {
  return (
    <div>
      <h2>Table of Contents</h2>
      <Router>
        <nav>
          <Link to="/">Home </Link>
          <Link to="/about">About </Link>
          <Link to="/products">Products</Link>
        </nav>

        <Switch>
          <Route path="/about">
            <h2>About Us</h2>
          </Route>

          <Route path="/products" component={Products} />

          <Route path="/">
            <Home message={'blah'}/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default MyRouter;