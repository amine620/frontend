import React from 'react';

const Login = () => {
    return (
        <div className='container mt-5'>
            <div className="row">
                <div className="col-md-6 form-group offset-3">
                    <h1 className="text-center text-primary">Login</h1>
                    <input type="text" className="form-control mt-2" placeholder='email' />
                    <input type="password" className="form-control mt-2" placeholder='password' />
                    <button className="form-control mt-2 btn btn-primary">login</button>
                </div>
            </div>
        </div>
    );
}

export default Login;
