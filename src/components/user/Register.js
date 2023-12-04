import React, { useEffect, useState } from 'react'
import imgLogin from '../../images/Login.png'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'


const Register = () => {

  const [values, setValues] = useState({
    name: '',
    email: '',
    phone: '',
    username: '',
    password: '',
  })

  const [user, setUser] = useState()

  const [error, setError] = useState({
    status: false,
    type: '',
    msg: ''
})

useEffect(() => {
  axios.get("http://localhost:8000/users")
  .then(res => setUser(res.data))
  .catch(err => console.log(err))
})

const navigate = useNavigate();


  const handleSubmit = ((e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
      name: data.get('name'),
      email: data.get('email'),
      phone: data.get('phone'),
      username: data.get('username'),
      password: data.get('password'),
    }
    let a=true;
    if (actualData.name && actualData.email && actualData.phone  && actualData.username && actualData.password) {
      user.map((d) => {
        if(actualData.username !== d.username){
          a=true;
        }
        else{
          a=false;
          setError({ status: true, msg: "Username is alredy exist", type: "Error" })
        }
        return 0;
      })
      if(a===true){
        axios.post("http://localhost:8000/users", values)
          .then(res => navigate('/login'))
          .catch(err => console.log(err))
      }
  } else {
      setError({ status: true, msg: "All fields are require", type: "Error" })
  }
  })

  return (
    <>
      <div className="card d-flex w-100 vh-100 justify-content-center align-items-center bg-light">
        <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
          <h2 className='text-secondary'><u>Create new User</u></h2>
          <form onSubmit={handleSubmit}>
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className='col-md-8 col-lg-5 col-xl-5'>
                <img src={imgLogin} alt="..." style={{ height: 200, width: 200 }} />
              </div>
              <div className='col-md-9 col-lg-7 col-xl-5 mt-3'>
                <div className='mb-3'>
                  <input type='text' name='name' onChange={e => setValues({...values, name: e.target.value})} className='form-control' placeholder='Enter Name' autoComplete='off' autoFocus/>
                </div>
                <div className='mb-3'>
                  <input type='text' name='email' onChange={e => setValues({...values, email: e.target.value})} className='form-control' placeholder='Enter Email' autoComplete='off' />
                </div>
                <div className='mb-3'>
                  <input type='text' name='phone' onChange={e => setValues({...values, phone: e.target.value})} className='form-control' placeholder='Enter Mobile No' autoComplete='off' />
                </div>
                <div className='mb-3'>
                  <input type='text' name='username' onChange={e => setValues({...values, username: e.target.value})} className='form-control' placeholder='Enter Username' autoComplete='off' />
                </div>
                <div className='mb-3'>
                  <input type='password' name='password' onChange={e => setValues({...values, password: e.target.value})} className='form-control' placeholder='Enter Password' autoComplete='off' />
                </div>
                {error.status ? <div className='mb-3 alert alert-danger'>{error.type}, {error.msg}</div> : ''}
                <div className='mb-3'>
                  <button className='btn btn-success'>Submit</button>
                </div>
                <div className="nav-item">
                  <Link to='/login' className='nav-link'>Click here to Login</Link>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Register