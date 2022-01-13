import './App.css';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';
import Auth from './views/Authorization/Auth';
import { useState } from 'react';
import { getUser, logout } from './services/users';

function App() {
  const [currentUser, setCurrentUser] = useState(getUser());
  const logoutUser = async () => {
    await logout();
    setCurrentUser(null);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <NavLink to="/signin">Sign In</NavLink>
        <NavLink to="/signup">Sign Up</NavLink>
        <Switch>
          <Route exact path="/">
            {currentUser && (
              <>
                <h1>I&apos;m signed in</h1>
                <button onClick={logoutUser}>Log out</button>
              </>
            )}
            {!currentUser && <Auth setCurrentUser={setCurrentUser} />}
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
