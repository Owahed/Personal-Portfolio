import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import Blogs from './Components/Home/Blogs/Blogs';
import MyProjects from './Components/MyProjects/MyProjects/MyProjects';
import ProjectDetails from './Components/MyProjects/ProjectDetails/ProjectDetails';
import AboutMe from './Components/Home/AboutMe/AboutMe';
import ContactMe from './Components/Home/ContactMe/ContactMe';


function App() {
  return (
    <Router>
      <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/blogs">
            <Blogs></Blogs>
          </Route>
          <Route path="/myProjects">
            <MyProjects></MyProjects>
          </Route>
          <Route path="/projectDetail">
            <ProjectDetails></ProjectDetails>
          </Route>
          <Route path="/aboutMe">
            <AboutMe></AboutMe>
          </Route>
          <Route path="/contactMe">
            <ContactMe></ContactMe>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
