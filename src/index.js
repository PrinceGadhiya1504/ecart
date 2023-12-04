import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css' 
import Home from './components/user/Home'
import Login from './components/user/Login'
import Register from './components/user/Register'
import ManProduct from './components/user/ManProduct'
import WomanProduct from './components/user/WomanProduct'
import ChildProduct from './components/user/ChildProduct'
import Cart from './components/user/Cart'
import Checkout from './components/user/Checkout'
import Profile from './components/user/Profile'
import Dashboard from './components/admin/Dashboard'
import Product from './components/admin/Product'
import AddProduct from './components/admin/AddProduct'
import UpdateProduct from './components/admin/UpdateProduct'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route extct path='/' element={<App/>}>
          <Route index element={<Home/>}/>
          {/* <Route path='/login' element={<Login/>}/> */}
          <Route path='/manProduct' element={<ManProduct/>}/>
          <Route path='/womanProduct' element={<WomanProduct/>}/>
          <Route path='/childProduct' element={<ChildProduct/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
          <Route path='/profile' element={<Profile/>}/>
        </Route>
          <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/product' element={<Product/>}/>
          <Route path='/addProduct' element={<AddProduct/>}/>
          <Route path='/updateProduct' element={<UpdateProduct/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

