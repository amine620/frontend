import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

  const logout=()=>{
     localStorage.clear()
     window.location="/login"
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Blog Manager</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {localStorage.getItem('token') ? (
              <>

              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">blogs</Link>
              </li>
               <li className="nav-item">
               <button onClick={logout} className="btn btn-secondary float-end">logout</button>
              </li>

              </>
            ) :
              (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/login">login</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/register">register</Link>
                  </li>
                 
                </>
              )
            }
          </ul>
        </div>
      </div>
    </nav>

  );
}

export default Navbar;
