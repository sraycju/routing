import Home from './Home';
import Time from './Timer';
import Data from './Data';
import Currency from './Currency';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Router>
          <Route exact path="/home" component={Home}/>
          <Route exact path="/time" component={Time}/>
          <Route exact path="/data" component={Data}/>
          <Route exact path="/currency" component={Currency}/>
      </Router>
    </div>
  );
}

export default App;
