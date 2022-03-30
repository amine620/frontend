import React, { useEffect, useState } from 'react'
import axios from "axios"
import Blog from './Blog';

export default function Blogs() {
    const [blogs, setblogs] = useState([])

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/all')
            .then(response => {
                console.log(response.data.articles);
                setblogs(response.data.articles)
            })
    }, []);

    const remove=(id)=>{
        axios.delete(`http://127.0.0.1:8000/api/destroy/${id}`)
        .then((res)=>{
            console.log(res);
            let result=blogs.filter((blog)=>blog.id!==id)
            setblogs(result)
        })


        
    }
    return (

        <>
            <div className="container mt-5">
                <div classname="form-group">
                    <input type="text" className="form-control mt-2" placeholder="title" />
                    <div className="form-floating">
                        <textarea className="form-control mt-2" placeholder="content" id="floatingTextarea2" style={{ height: 100 }} defaultValue={""} />
                        <label htmlFor="floatingTextarea2">content</label>
                    </div>
                    <button  className="btn btn-primary form-control mt-2">save</button>
                </div>

            </div>

            <div className="container mt-5">
                <div className="row">

                    {
                        blogs.map((blog) => (
                            <div className="card col-md-4 mt-2 ">
                                <Blog data={blog} />
                                <button onClick={()=>remove(blog.id)} className='btn btn-danger'>delete</button>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}
