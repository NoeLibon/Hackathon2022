import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Profile from "./pages/Profile";
import Call from "./pages/Call";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Index from "./pages/Index";


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      isLoggedIn: false,
    }
}

    render() {

      let profile, call, contact, home, index;

      if(true) {
        profile = <Route exact path="/Profile"><Profile /></Route>;
        call = <Route exact path="/Call"><Call /></Route>;
        contact = <Route exact path="/Contact"><Contact /></Route>;
        home = <Route exact path="/Home"><Home /></Route>;
        index = <Route exact path="/"><Index /></Route>;
      } else {
        profile = <Route exact path="/Profile"><Index /></Route>;
        call = <Route exact path="/Call"><Index /></Route>;
        contact = <Route exact path="/Contact"><Index /></Route>;
        home = <Route exact path="/Home"><Index /></Route>;
        index = <Route exact path="/"><Index /></Route>;
      }

      const styles = {
        contentDiv: {
          display: "flex",
          backgroundColor: "#f9f9f9",
          height: "100vh",
          width: "100vw",
        },
        contentMargin: {
          marginLeft: "10px",
          width: "100%",
        },
      };
      return (
      <Router>
        <div style={styles.contentDiv}>
          <div style={styles.contentMargin}>
            <Switch>
              { profile }
              { call }
              { contact }
              { home }
              { index }
            </Switch>
          </div>
        </div>
      </Router>
    );
  };
}

export default App;
