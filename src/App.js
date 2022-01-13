import './App.css';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';
import SignIn from './views/Authorization/SignIn';
import SignUp from './views/Authorization/SignUp';
import { useState } from 'react';
import { getUser } from './services/users';

function App() {
  const [currentUser] = useState(getUser());

  return (
    <div className="App">
      <BrowserRouter>
        <NavLink to="/signin">Sign In</NavLink>
        <NavLink to="/signup">Sign Up</NavLink>
        <Switch>
          <Route exact path="/signin">
            <SignIn />
          </Route>
          <Route exact path="/signup">
            <SignUp />
          </Route>
          <Route exact path="/">
            {currentUser && <h1>I&apos;m signed in</h1>}
            {!currentUser && <h1>I&apos;m not signed in</h1>}
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
