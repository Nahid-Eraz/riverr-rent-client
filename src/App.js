import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import DashBoard from './components/DashBoard/DashBoard/DashBoard';
import AddService from './components/AddService/AddService';
import MakeAdmin from './components/MakeAdmin/MakeAdmin';
import Book from './components/Book/Book';
import BookingList from './components/BookingList/BookingList';
import Review from './components/Review/Review';
import Login from './components/Auth/Login';
import { createContext, useState } from 'react';
import PrivateRoute from './components/Auth/PrivateRoute/PrivateRoute';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <PrivateRoute path="/dashboard/orderList">
            <DashBoard />
          </PrivateRoute>
          <PrivateRoute path="/dashboard/addService">
            <AddService />
          </PrivateRoute>
          <PrivateRoute path="/dashboard/makeAdmin">
            <MakeAdmin />
          </PrivateRoute>
          <PrivateRoute path="/dashboard/book/:key">
            <Book />
          </PrivateRoute>
          <PrivateRoute path="/dashboard/bookingList">
            <BookingList />
          </PrivateRoute>
          <PrivateRoute path="/dashboard/review">
            <Review />
          </PrivateRoute>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
