import { BrowserRouter as Router, Route, Switch } from "react-router-dom"; 
import Home from './containers/Home/Home';
import About from './containers/About/About';
import ProjectsPage from './containers/ProjectsPage/ProjectsPage';
import Navbar from './components/Navbar/Navbar';
import PageNotFound from './containers/PageNotFound/PageNotFound';
import Footer from './components/Footer/Footer';
import Contact from './containers/Contact/Contact';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/projects" component={ProjectsPage} />
          <Route exact path="/" component={Home} />
          <Route path="/" component={PageNotFound} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
