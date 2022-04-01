import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Update = () => {

    const config = {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    };

    const [form,setform]=useState({})

    const handleChange=(e)=>{
        setform({
            ...form,
            [e.target.name]:e.target.value
        })
   }

   const param=useParams()
   useEffect(() => {
    
       axios.get(`http://127.0.0.1:8000/api/show/${param.id}`,config)
       .then(res=>{
           setform(res.data.article)
       })
   }, []);

   const updateArticle=()=>{
    axios.get('http://localhost:8000/sanctum/csrf-cookie').then(response => {
        axios.put(`http://localhost:8000/api/update/${param.id}`,form,config)
        .then(res=>{
            window.location="/"
        })
    })
   }
    return (
        <div className="container mt-5">
        <div classname="form-group">
            <input defaultValue={form.title} onChange={handleChange} name='title' type="text" className="form-control mt-2" placeholder="title" />
          
            <div className="form-floating">
                <textarea onChange={handleChange} name='description' className="form-control mt-2" placeholder="content" id="floatingTextarea2" style={{ height: 100 }} defaultValue={form.description} />
                <label htmlFor="floatingTextarea2">content</label>
            </div>
            <button onClick={updateArticle}  className="btn btn-warning form-control mt-2">save</button>
        </div>

    </div>
    );
}

export default Update;
