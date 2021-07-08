import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import App from './routes/app/App'
import Auth from './routes/auth/Auth'

import SignIn from './SignIn'
import SignUp from './SignUp'
import ProductsList from './routes/ProductsList'

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export default function BasicExample() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/auth">Login</Link>
          </li>
          <li>
            <Link to="/signIn">Sign in</Link>
          </li>
          <li>
            <Link to="/signUp">Sign up</Link>
          </li>
          <li>
            <Link to="/productsList">Product list</Link>
          </li>
        </ul>

        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <App />
          </Route>
          <Route exact path="/auth">
            <Auth />
          </Route>
          <Route exact path="/signIn">
            <SignIn />
          </Route>
          <Route exact path="/signUp">
            <SignUp />
          </Route>
          <Route exact path="/productsList">
            <ProductsList />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}
