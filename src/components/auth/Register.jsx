import axios from 'axios';
import React, { useState } from 'react';

const Register = () => {
    const [user,setuser]=useState({})

    const handleChange=(e)=>{
         setuser({
             ...user,
             [e.target.name]:e.target.value
         })
    }

    const userRegister=()=>{
        
        axios.get('http://localhost:8000/sanctum/csrf-cookie').then(response => {

            axios.post('http://localhost:8000/api/register',user)
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
                <h1 className="text-center text-primary">Register</h1>
                <input onChange={handleChange} name='name' type="text" className="form-control mt-2" placeholder='name' />
                <input onChange={handleChange} name='email' type="text" className="form-control mt-2" placeholder='email' />
                <input onChange={handleChange} name='password' type="password" className="form-control mt-2" placeholder='password' />
                <button onClick={userRegister} className="form-control mt-2 btn btn-primary">register</button>
            </div>
        </div>
   </div>
    );
}

export default Register;
