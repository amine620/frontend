import React, { useEffect, useState } from 'react'
import axios from "axios"
import Blog from './Blog';

export default function Blogs() {
    const [articles, setarticles] = useState([])
    const [form,setform]=useState({})
    const [errors,seterrors]=useState({})
    

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/all')
            .then(response => {
                console.log(response.data.articles);
                setarticles(response.data.articles)
            })
    }, []);

    const remove=(id)=>{
        axios.delete(`http://127.0.0.1:8000/api/destroy/${id}`)
        .then((res)=>{
            console.log(res);
            let result=articles.filter((article)=>article.id!==id)
            setarticles(result)
        })  
    }

    const handleChange=(e)=>{
         setform({
             ...form,
             [e.target.name]:e.target.value
         })
    }

    const sendData=()=>{
       axios.post("http://127.0.0.1:8000/api/store",form)
       .then(res=>{
           seterrors({})
           setarticles([ res.data.article , ...articles])  
       })
       .catch(error=>{
           seterrors(error.response.data.errors)
       })
       
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
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}
