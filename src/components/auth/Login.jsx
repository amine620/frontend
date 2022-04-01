import React, { useState } from 'react';
import axios from "axios"

const Login = () => {
    const [user,setuser]=useState({})

    const handleChange=(e)=>{
         setuser({
             ...user,
             [e.target.name]:e.target.value
         })
    }

    const userLogin=()=>{
        
        axios.get('http://localhost:8000/sanctum/csrf-cookie').then(response => {

            axios.post('http://localhost:8000/api/login',user)
            .then(res=>{
                console.log(res);
                localStorage.setItem('token',res.data.token)
                window.location="/"
            })

        });
    }
    if(localStorage.getItem('token'))
    {
        window.location="/"
        return ''
    }
    return (
        <div className='container mt-5'>
            <div className="row">
                <div className="col-md-6 form-group offset-3">
                    <h1 className="text-center text-primary">Login</h1>
                    <input onChange={handleChange} name='email' type="text" className="form-control mt-2" placeholder='email' />
                    <input onChange={handleChange} name='password' type="password" className="form-control mt-2" placeholder='password' />
                    <button onClick={userLogin} className="form-control mt-2 btn btn-primary">login</button>
                </div>
            </div>
        </div>
    );
}

export default Login;
