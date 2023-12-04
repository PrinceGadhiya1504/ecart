import axios from "axios";
import React, { useEffect, useState } from "react";
import imgRegister from '../../images/Registration.png'
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [value, setValue] = useState();
  const [admin, setAdmin] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:8000/users")
      .then((res) => setValue(res.data))
      .catch((err) => console.log(err));
  },[]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/admin")
      .then((res) => setAdmin(res.data))
      .catch((err) => console.log(err));
  },[]);

const navigate = useNavigate();

  const [error, setError] = useState({
    status: false,
    type: '',
    msg: ''
})

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
      username: data.get('username'),
      password: data.get('password'),
    }
    if (actualData.username && actualData.password) {
      value.map((d) => {
        admin.map((d) => {
          if (actualData.username === d.username && actualData.password === d.password) {
            navigate('/dashboard');
            sessionStorage.setItem('id',d.id)
          }
          return 0;
        })
        if (actualData.username === d.username && actualData.password === d.password) {
          sessionStorage.setItem('id',d.id)
          navigate('/');
        }
        else{
          setError({ status: true, msg: "Wrong username or password", type: "Error" })
  
        }
        return 0;
      })
    } else {
      setError({ status: true, msg: "All fields are require", type: "Error" })
    }

  }

  return (
    <>
      <div className="card d-flex w-100 vh-100 justify-content-center align-items-center bg-light">
        <div className="w-50 border bg-white shadow px-5 pt-3 pb-5 rounded">
          <h2 className="text-secondary">
            <u>Create new User</u>
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-md-8 col-lg-5 col-xl-5">
                <img
                  src={imgRegister}
                  alt="..."
                  style={{ height: 200, width: 200 }}
                />
              </div>
              <div className="col-md-9 col-lg-7 col-xl-5 mt-3">
                <div className="mb-3">
                  <input
                    type="text"
                    name="username"
                    className="form-control"
                    placeholder="Enter Username"
                    autoComplete="off"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="Enter Password"
                    autoComplete="off"
                  />
                </div>
                {error.status ? <div className='mb-3 alert alert-danger'>{error.type}, {error.msg}</div> : ''}
                <div className="mb-3">
                  <button className="btn btn-success">Submit</button>
                </div>
                <div className="nav-item">
                  <Link to="/register" className="nav-link">
                    Click here to Registration
                  </Link>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
