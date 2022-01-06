import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Shared/Header/Header";
import Home from "./components/Home/Home/Home";
import Tours from "./components/Home/Tours/Tours";
import NotFound from "./components/Home/NotFound/NotFound";
import AddTours from "./components/Home/AddTours/AddTours";
import BookingDetails from "./components/Home/BookingDetails/BookingDetails";
import AuthProvider from "./Context/authProvider";
import Login from "./components/Home/Login/Login";
import PrivetRoute from "./components/PrivetRoute/PriverRoute";
import Shipping from "./components/Home/Shipping/Shipping";
import MyOrders from "./components/Home/MyOrders/MyOrders";
import Dashboard from "./components/Home/Dashboard/Dashboard";
import Footer from "./components/Shared/Footer/Footer";
import Register from "./components/Home/Register/Register";
import UpdateStatus from "./components/Home/UpdateStatus/UpdateStatus";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Routes>
            <Route path="/" element={<Home></Home>} />
            <Route path="/home" element={<Home></Home>} />
            <Route path="/tours" element={<Tours />} />
            <Route
              path="/addTours"
              element={
                <PrivetRoute>
                  <AddTours />
                </PrivetRoute>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/bookingDetails"
              element={
                <PrivetRoute>
                  <BookingDetails />
                </PrivetRoute>
              }
            />
            <Route path="/shipping" element={<Shipping />} />
            <Route
              path="/myOrders"
              element={
                <PrivetRoute>
                  <MyOrders />
                </PrivetRoute>
              }
            />
            <Route path="/dashboard" element={<PrivetRoute><Dashboard /></PrivetRoute>}>
              <Route path="/dashboard/bookingDetails" element={<PrivetRoute><BookingDetails /></PrivetRoute>}/>
              <Route path="/dashboard/myOrders" element={<PrivetRoute><MyOrders /></PrivetRoute>}/>
              <Route path="/dashboard/bookingDetails" element={<PrivetRoute><BookingDetails /></PrivetRoute>}/>
              <Route path="/dashboard/addTours" element={<PrivetRoute><AddTours /></PrivetRoute>}/>

            </Route>
            <Route path="/updateStatus/:statusId" element={<UpdateStatus />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
