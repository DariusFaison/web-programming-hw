import './App.css';
import {Route, BrowserRouter as Router, Link} from 'react-router-dom';
import Facts from './Pages/Facts';
import Yeezy from './Pages/Yeezy';

function App() {
  return (
    <Router>
      <header class="App-header">Facts or Yeezy?</header>
      <Route path='/' exact component={Facts} class="Content"></Route>
      <Route path='/Yeezy' component={Yeezy}></Route>
      <div class="Footer">
        <footer>
          <Link to="/">
            <button>Facts!</button>
          </Link>
          <Link to="/Yeezy">
            <button>Yeezy!</button>
          </Link>
        </footer>
      </div>
    </Router>
  )
}

export default App;
