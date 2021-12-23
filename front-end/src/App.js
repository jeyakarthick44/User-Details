import './App.css';
import Home from './Home';
import { BrowserRouter as Router, Route,Routes} from "react-router-dom";
import AddUser from './AddUser';

function App() {
  return (
    <div>
      <Router>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/adduser" element={<AddUser />} />
        </Routes>
        </Router>
    </div>
  );
}

export default App;
