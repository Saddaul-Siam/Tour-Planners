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
import AddTours from './components/Home/AddTours/AddTours';
import BookingDetails from './components/Home/BookingDetails/BookingDetails';

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
          <Route path="/addTours">
            <AddTours></AddTours>
          </Route>
          <Route path="/bookingDetails">
            <BookingDetails />
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
