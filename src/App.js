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
          <Router basename={process.env.PUBLIC_URL}>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/git.html" component={Git} />
            <Route exact path="/index.html" component={Main} />
          </Switch>
          </Router>
          <Footer />
        </Wrapper>
      </div>
    </Router>
  );
}

export default App;
