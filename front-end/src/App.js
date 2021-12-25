import AllUsers from './AllUsers';
import AddUser from './AddUser';
import EditUser from './EditUser';
import NavBar from './NavBar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/all" component={AllUsers} />
        <Route exact path="/add" component={AddUser} />
        <Route exact path="/edit/:id" component={EditUser} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
