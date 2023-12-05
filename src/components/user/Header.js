import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Header = () => {

const navigate = useNavigate();

  const logout = () => {
    navigate('/login');
  };

  return (
    <div>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark mb-5">
          <div className="container-fluid">
            <Link to='/profile'className='navbar-brand'>Profile</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to='/' className='nav-link'>Home</Link>
                </li>
                <li className="nav-item">
                  <Link to='/manProduct' className='nav-link'>Man-Product</Link>
                </li>
                <li className="nav-item">
                  <Link to='/womanProduct' className='nav-link'>Woman-Product</Link>
                </li>
                <li className="nav-item">
                  <Link to='/childProduct' className='nav-link'>Child-Product</Link>
                </li>
                <li className="nav-item d-flex ">
                  <Link to='/cart' className='nav-link'>Cart</Link>
                </li>
                {/* <li className="nav-item d-flex ">
                  <Link to='/checkout' className='nav-link'>Checkout</Link>
                </li> */}
                <li className="nav-item d-flex ">
                  <Link to='/login' onClick= {logout} className='nav-link'>Logout</Link>
                </li>
              </ul>
              </div>
            </div>
        </nav>
    </div>
  )
}

export default Header