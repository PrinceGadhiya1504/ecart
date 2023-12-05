import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const ChildProduct = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get('http://localhost:8000/products')
    .then(res => setData(res.data))
    .catch(err => console.log(err))
},[])

  return (
    <>
      <div className="container"> 
        <div className="row"> 
          {
            data.map((d,i) => {
              if(d.category === "child"){
              return (
                <div className="col-lg-4 mb-4" key={i}> 
                  <div className="card"> 
                    <img className="card-img-top" src="" alt="" /> 
                      <div className="card-body"> 
                        <h5 className="card-title">{d.name}</h5> 
                        <p className="card-text">{d.description}</p> 
                        <p className="card-text">{d.category}</p> 
                        <h6 className="card-subtitle mb-2 text-muted">{d.price}</h6>
                        <Link to={'/cart'} state={d.id} className='btn btn-sm btn-primary me-2'>Add to Cart</Link>
                      </div> 
                  </div> 
                </div> 
              )
            }return "";
          })
        }     
        </div> 
      </div> 
    </>
  )
}

export default ChildProduct