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
import IconAntd from './component/icon';
import TableAddant from './component/table/add';
import TableSearchant from './component/table/search';
import ThemeAnt from './component/theme';
import FormValAntd from './component/form/validate';
import TablePagination from './component/table/tablepari';
import FileUpload from './component/fileupload';
import EditTableShell from './component/table/editTableShell';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>Edit Table Shell</div>
        <EditTableShell />
        <div> upload file</div>
        <FileUpload />
        <div>phân trang </div>
        <TablePagination />
        <div>Form</div>
        <FormValAntd />
        <div> theme </div>
        <ThemeAnt />
        <div> search table</div>
        <TableSearchant />
        <TableAddant />
        <IconAntd />
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <ButtonAnt /> */}
        <InputAnt />
        {/*<Selectant />
        <Formant /> */}
        <Tableant />
        {/* <Alertant />
        <DatePickerAnt />
        <Spinant/>
        <ProgressAnt/> */}
        <TableSelectant />

      </header>
    </div>
  );
}

export default App;
