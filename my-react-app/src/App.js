import logo from './logo.svg';
import './App.css';

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
        <Navbar></Navbar>
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
