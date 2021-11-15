import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from './components/Login';
import Employees from './components/Employees';
import EmployeesAdd from './components/EmployeesAdd';
import EmployeesDetail from './components/EmployeesDetail';
import EmployeesEdit from './components/EmployeesEdit';
import 'antd/dist/antd.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/Employees">
            <Employees />
          </Route>
          <Route path="/Employees/EmployeesAdd">
            <EmployeesAdd />
          </Route>
          <Route path="/Employees/EmployeesDetail/:id">
            <EmployeesDetail />
          </Route>
          <Route path="/Employees/EmployeesEdit/:id">
            <EmployeesEdit />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
