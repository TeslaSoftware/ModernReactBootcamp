import './App.css';
import VendingMachine from './VendingMachine';
import Chips from './Chips';
import Sardines from './Sardines';
import Soda from './Soda';

function App() {
  return (
    <div className="App">
      <VendingMachine />
      <Chips/>
      <Sardines/>
      <Soda/>
    </div>
  );
}

export default App;
