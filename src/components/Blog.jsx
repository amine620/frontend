import React from 'react'

export default function Blog(props) {
  return (
   
  <div className="card-body">
    <h5 className="card-title">{props.data.title}</h5>
    <p className="card-text">{props.data.description}</p>
  </div>


  )
}
