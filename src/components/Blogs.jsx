import React, { useEffect, useState } from 'react'
import axios from "axios"
import Blog from './Blog';
import { Link } from 'react-router-dom';

export default function Blogs() {
    const [articles, setarticles] = useState([])
    const [form,setform]=useState({})
    const [errors,seterrors]=useState({})
    

    const config = {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    };

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/all',config)
            .then(response => {
                console.log(response.data.articles);
                setarticles(response.data.articles)
            })
    }, []);

    const remove=(id)=>{
        axios.get('http://localhost:8000/sanctum/csrf-cookie').then(response => {

            axios.delete(`http://localhost:8000/api/destroy/${id}`,config)
            .then((res)=>{
                console.log(res);
                let result=articles.filter((article)=>article.id!==id)
                setarticles(result)
            }) 
    }) 
    }

    const handleChange=(e)=>{
         setform({
             ...form,
             [e.target.name]:e.target.value
         })
    }

    const sendData=()=>{
        axios.get('http://localhost:8000/sanctum/csrf-cookie').then(response => {

                axios.post("http://localhost:8000/api/store",form,config)
                .then(res=>{
                    seterrors({})
                    setarticles([ res.data.article , ...articles])  
                })
                .catch(error=>{
                    seterrors(error.response.data.errors)
                })
    })
       
    }

    if(!localStorage.getItem('token'))
    {
        window.location="/login"
        return ''
    }

    return (

        <>
            <div className="container mt-5">
                <div classname="form-group">
                    <input onChange={handleChange} name='title' type="text" className="form-control mt-2" placeholder="title" />
                    {
                        errors ? (<span className='text-danger'>{errors.title}</span>) : ""
                    }
                    <div className="form-floating">
                        <textarea onChange={handleChange} name='description' className="form-control mt-2" placeholder="content" id="floatingTextarea2" style={{ height: 100 }} defaultValue={""} />
                        <label htmlFor="floatingTextarea2">content</label>
                        {
                        errors ? (<span className='text-danger'>{errors.description}</span>) : ""
                       }
                    </div>
                    <button onClick={sendData}  className="btn btn-primary form-control mt-2">save</button>
                </div>

            </div>

            <div className="container mt-5">
                <div className="row">

                    {
                        articles.map((article) => (
                            <div className="card col-md-4 mt-2 ">
                                <Blog data={article} />
                                <button onClick={()=>remove(article.id)} className='btn btn-danger'>delete</button>
                                <Link to={`update/${article.id}`} className="btn btn-warning" >update</Link>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}
