import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const ManProduct = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get('http://localhost:8000/products')
    .then(res => setData(res.data))
    .catch(err => console.log(err))
})

  return (
    <div>
      {
        data.map((d, i) => {
          if(d.category==="man"){
            return (
                <div class="card" style={{width: 300}}>
                  <div class="card-body">
                    <h5 class="card-title">{d.name}</h5>
                    <h5 class="card-title">{d.category}</h5>
                    <p class="card-text">{d.description}</p>
                    <h6 class="card-subtitle mb-2 text-muted">{d.price}</h6>
                    <Link to={'/cart'} state={d.id} className='btn btn-sm btn-primary me-2'>Add to Cart</Link>
                  </div>
           </div>
            )
          }
          return "";
        })
      }
    </div>
  )
}

export default ManProduct