import 'bootstrap/dist/css/bootstrap.min.css'
import Blogs from './components/Blogs';
import Navbar from './components/Navbar';
import {BrowserRouter as Router , Routes,Route} from 'react-router-dom'
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import axios from "axios"
import Update from './components/Update';


function App() {
  axios.defaults.withCredentials = true;

  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
        
          <Route path='/' element={<Blogs/>} />
          <Route path='/login' element={ <Login/>} />
          <Route path='/register' element={ <Register/>} />
          <Route path='/update/:id' element={ <Update/>} />
          <Route path="*" element={<p>There's nothing here: 404!</p>} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
