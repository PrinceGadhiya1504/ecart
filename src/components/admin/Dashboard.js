import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Dashboard = () => {

  const Id = sessionStorage.getItem('id');
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get('http://localhost:8000/products')
    .then(res => setData(res.data))
    .catch(err => console.log(err))
}, [])

const handleDelete = (id) => {
const confirm = window.confirm("Would you like to Delete ?");
if(confirm){
    axios.delete('http://localhost:8000/products/'+id)
    .then(res => {
        window.location.reload(true );
    })
    .catch(error => console.log(error));
}
}

  return (
    <div>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
          <div className="container-fluid">
            <Link to='/dashboard'className='navbar-brand'>E-Cart</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to='/addProduct' className='nav-link'>Add Product</Link>
                </li>
                <li className="nav-item d-flex ">
                  <Link to='/login' className='nav-link'>Logout</Link>
                </li>
              </ul>
              </div>
            </div>
        </nav>
        <h1>Id : {Id}</h1>
        <div className='d-flex flex-column justify-content-center align-items-center bg-light'>
        <h1>List of Products</h1>
        <div className='w-75 rounded bg-white border shadow p-4'>
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Stock</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((d, i) => (
                            <tr key={i}>
                                <td>{i+1}</td>
                                <td>{d.name}</td>
                                <td>{d.description}</td>
                                <td>{d.category}</td>
                                <td>{d.price}</td>
                                <td>
                                    {/* <Link to={'/readProduct'} state={d.id} className='btn btn-sm btn-info me-2'>Read</Link> */}
                                    <Link to={'/updateProduct'} state={d.id} className='btn btn-sm btn-primary me-2'>Edit</Link>
                                    <button onClick={e => handleDelete(d.id)} className='btn btn-sm btn-danger'>Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
                <tr>
                </tr>
            </table>
        </div>
        </div>
    </div>
  )
}

export default Dashboard