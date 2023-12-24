// import logo from './logo.svg';
import './style/style.css'
import './App.css';
import Navbar from './component/Navbar';
// import Footer from './component/Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Hollywood from './component/Hollywood';
import Bollywood from './component/Bollywood';
import Home from './component/Home';

function App() {
  return (
    <div>
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/hollywood" component={Hollywood} />
            <Route exact path="/bollywood" component={Bollywood} />
          </Switch>
        </div>
      </Router>
    {/* <h1>thihs is app.js in react</h1> */}
    </div>
  );
}

export default App;
