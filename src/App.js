// import logo from './logo.svg';
import './App.css';
import ButtonAnt from './component/button';
import InputAnt from './component/input';
import Selectant from './component/select';
import Formant from './component/form';
import Tableant from './component/table';
import Alertant from './component/alert';
import DatePickerAnt from './component/DatePicker';
import Spinant from './component/Spin';
import ProgressAnt from './component/progress';
import TableSelectant from './component/table/select';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <ButtonAnt /> */}
        {/* <InputAnt />
        <Selectant />
        <Formant /> */}
        <Tableant />
        {/* <Alertant />
        <DatePickerAnt />
        <Spinant/>
        <ProgressAnt/> */}
        <TableSelectant/>

      </header>
    </div>
  );
}

export default App;
