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

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/dashboard/orderList">
          <DashBoard />
        </Route>
        <Route path="/dashboard/addService">
          <AddService />
        </Route>
        <Route path="/dashboard/makeAdmin">
          <MakeAdmin />
        </Route>
        <Route path="/dashboard/book">
          <Book />
        </Route>
        <Route path="/dashboard/bookingList">
          <BookingList />
        </Route>
        <Route path="/dashboard/review">
          <Review />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
