// import logo from './logo.svg';
import './App.css';
import ButtonAnt from './component/button';
import InputAnt from './component/input';
import Selectant from './component/select';
import Formant from './component/form';
import Tableant from './component/table';
import Alertant from './component/alert';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <ButtonAnt />
        <InputAnt />
        <Selectant />
        <Formant />
        <Tableant />
        <Alertant />

      </header>
    </div>
  );
}

export default App;
