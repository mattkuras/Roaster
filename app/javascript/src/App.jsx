import React, { useState, useEffect } from "react";
import {
  Route,
  Switch,
  Redirect,
  useHistory,
  BrowserRouter as Router,
} from "react-router-dom";
import Axios from "axios";
import "./App.css";
import Card from "./components/card/Card.jsx";
import Login from "./components/registrations/login.js";
import SwipePage from "./components/swipePage/swipePage.js";
import Navbar from "./components/navbar/navbar.js";
import ProfilePage from "./components/profilePage/profilePage.js";
import MessagePage from "./components/messagePage/messagePage.js";

const App = () => {
  const [accounts, setAccounts] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [account, setAccount] = useState({});

  useEffect(() => {
    getAccounts();
    loginStatus();
  }, []);

  const getAccounts = () => {
    Axios.get("http://localhost:3000/accounts").then((resp) =>
      setAccounts(resp.data)
    );
  };

  const loginStatus = () => {
    Axios.get("http://localhost:3000/logged_in", { withCredentials: true })
      .then((response) => {
        setAccount(response.data.account);
        response.data.logged_in ? setIsLoggedIn(true) : setIsLoggedIn(false);
      })
      .catch((error) => console.log("api errors:", error));
  };

  const handleLogin = (data) => {
    setAccount(data.account);
    setIsLoggedIn(true);
  };
  const handleLogout = () => {
    setIsLoggedIn(false);
    setAccount({});
  };

  let history = useHistory();

  const cards = accounts.map((acc) => {
    return <Card key={acc.first_name} name={acc.first_name} />;
  });

  return (
    <Router>
      <div className="app">
        <Switch>
        <Route exact path="/swipe">
            {" "}
            <SwipePage />
            {isLoggedIn ? null : <Redirect to="/login" />}
          </Route>
          <Route exact path="/profile">
            {" "}
            <ProfilePage />
            {isLoggedIn ? null : <Redirect to="/login" />}
          </Route>
          <Route exact path="/message">
            {" "}
            <MessagePage />
            {isLoggedIn ? null : <Redirect to="/login" />}
          </Route>
          <Route
            path="/login"
            render={(props) => (
              <Login
                {...props}
                handleLogin={handleLogin}
                loggedInStatus={isLoggedIn}
              />
            )}
          >
            {isLoggedIn ? <Redirect to="/" /> : null}
          </Route>
        </Switch>
        <Navbar />
      </div>
    </Router>
  );
};

export default App;
