import {Route} from 'react-router-dom';
import './App.css';
import VendingMachine from './VendingMachine';
import Chips from './Chips';
import Sardines from './Sardines';
import Soda from './Soda';

function App() {
  return (
    <div className="App">
      <Route exact path="/" render={() => <VendingMachine/>} />
      <Route exact path="/soda" render={() => <Soda/>} />
      <Route exact path="/sardines" render={() => <Sardines/>} />
      <Route exact path="/chips" render={() => <Chips/>} />
    </div>
  );
}

export default App;
