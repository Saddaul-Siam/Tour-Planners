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
import AuthProvider from './Context/authProvider';
import Login from './components/Home/Login/Login';
import PrivetRoute from './components/PrivetRoute/PriverRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>
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
            <PrivetRoute path="/addTours">
              <AddTours></AddTours>
            </PrivetRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivetRoute path="/bookingDetails">
              <BookingDetails />
            </PrivetRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router >
      </AuthProvider>
    </div >
  );
}

export default App;
