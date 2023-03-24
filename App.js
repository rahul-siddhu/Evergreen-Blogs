import Navbar from './Navbar';
import Home from './Home'
import Create from './Create'
import BlogDetails from './BlogDetails'
import Notfound from './Notfound'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {
  let title="Welcome to the new Blog"
  return (
  <Router>
    <div className="App">
      <Navbar/>
      <div className="content">
          <Switch>
              <Route exact path="/">
                <Home/>
              </Route>
              <Route path="/create">
                <Create/>
              </Route>
              <Route path="/blogs/:id">
                <BlogDetails/>
              </Route>
              <Route path="*">
                <Notfound/>
              </Route>
          </Switch>
      </div>
    </div>
  </Router>
  );
}

export default App;
