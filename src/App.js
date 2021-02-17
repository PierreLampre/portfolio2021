import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Nav from "./components/Nav/Nav"
import Home from "./components/Routes/Home/Home"
import Projects from "./components/Routes/Projects/Projects"
import Skills from "./components/Routes/Skills/Skills"
import Contact from "./components/Routes/Contact/Contact"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/projects">
            <Projects />
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/skills">
            <Skills />
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/contact">
            <Contact />
          </Route>
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
