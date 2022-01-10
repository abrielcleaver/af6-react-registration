import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Auth from './views/Authorization/Auth';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Auth />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
