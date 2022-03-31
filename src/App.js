import 'bootstrap/dist/css/bootstrap.min.css'
import Blogs from './components/Blogs';
import Navbar from './components/Navbar';
import {BrowserRouter as Router , Routes,Route} from 'react-router-dom'
import Login from './components/auth/Login';
import Register from './components/auth/Register';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>

        <Routes>
          <Route path='/' element={ <Blogs/>} />
          <Route path='/login' element={ <Login/>} />
          <Route path='/register' element={ <Register/>} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
