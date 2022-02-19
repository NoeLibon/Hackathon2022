import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Profile from "./pages/Profile";
import Call from "./pages/Call";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Index from "./pages/Index";

function App() {
  const styles = {
    contentDiv: {
      display: "flex",
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
            <Route exact path="/Profile">
              <Profile />
            </Route>
            <Route exact path="/Call">
              <Call />
            </Route>
            <Route exact path="/Contact">
              <Contact />
            </Route>
            <Route exact path="/Home">
              <Home />
            </Route>
            <Route exact path="/">
              <Index />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
