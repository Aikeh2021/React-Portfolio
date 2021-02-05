import { BrowserRouter as Router, Route, Switch } from "react-router-dom"; 
import Home from './containers/Home/Home';
import About from './containers/About/About';
import Portfolio from './containers/Portfolio/Portfolio';
import Projects from './containers/Projects/Projects';
import Navbar from './components/Navbar/Navbar';
import PageNotFound from './containers/PageNotFound/PageNotFound';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/projects" component={Projects} />
          <Route exact path="/" component={Home} />
          <Route path="/" component={PageNotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
