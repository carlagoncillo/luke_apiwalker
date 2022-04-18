import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Form from './components/Form';
import People from './components/People';
import Planets from './components/Planets';

function App() {
  return (
    <BrowserRouter>
      <h1 style={{textAlign: "center"}}>Luke API-Walker👩‍🚀🔥</h1>
      <Form/>
      <hr/>
      <Switch>
        <Route exact path="/people/:id">
          <People/>
        </Route>
        <Route exact path="/planets/:id">
          <Planets/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
