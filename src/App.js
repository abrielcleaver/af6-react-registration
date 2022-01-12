import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SignIn from './views/Authorization/SignIn';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <SignIn />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
