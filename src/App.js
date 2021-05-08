import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./pages/Main";
import Git from "./pages/Git";
import Wrapper from "./components/Wrapper";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import "./index.css"

function App() {
  return (
    <Router>
      <div>
        <Wrapper>
          <Nav />
          <Switch>
            <Route exact path="/portfolio/" component={Main} />
            <Route exact path="/portfolio/git.html" component={Git} />
            <Route exact path="/portfolio/index.html" component={Main} />
          </Switch>
          <Footer />
        </Wrapper>
      </div>
    </Router>
  );
}

export default App;
