import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './components/Shared/Header/Header';
import Home from './components/Home/Home/Home';
import Tours from './components/Home/Tours/Tours';
import NotFound from './components/Home/NotFound/NotFound';
import ServicesDetails from './components/Home/ServicesDetails/ServicesDetails';
import AddTours from './components/Home/AddTours/AddTours';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/tours">
            <Tours></Tours>
          </Route>
          <Route path="/service/:id">
            <ServicesDetails></ServicesDetails>
          </Route>
          <Route path="/addTours">
            <AddTours></AddTours>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router >
    </div >
  );
}

export default App;
