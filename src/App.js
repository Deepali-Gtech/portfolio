import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./pages/Main";
import Git from "./pages/Git";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/git.html" component={Git} />
          <Route exact path="/index.html" component={Main} />
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
