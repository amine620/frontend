import React from 'react';

const Register = () => {
    return (
        <div className='container mt-5'>
        <div className="row">
            <div className="col-md-6 form-group offset-3">
                <h1 className="text-center text-primary">Register</h1>
                <input type="text" className="form-control mt-2" placeholder='name' />
                <input type="text" className="form-control mt-2" placeholder='email' />
                <input type="password" className="form-control mt-2" placeholder='password' />
                <button className="form-control mt-2 btn btn-primary">register</button>
            </div>
        </div>
   </div>
    );
}

export default Register;
