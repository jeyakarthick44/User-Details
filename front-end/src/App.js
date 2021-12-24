import './App.css';
import Home from './Home';
import { BrowserRouter as Router, Route,Routes} from "react-router-dom";
import AddUser from './AddUser';
import Navbar from './Navbar';
import Edit from './Edit'

function App() {
  return (
    <div>
      <Router>
        <Navbar />
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/adduser" element={<AddUser />} />
        <Route path="/updateuser" element={<Edit />} />
        </Routes>
        </Router>
    </div>
  );
}

export default App;
