import axios from "axios";
import React, { useEffect, useState } from "react";
// import { Link, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const Cart = () => {

  // const location = useLocation();
  // const id = location.state;

  const id = window.sessionStorage.getItem('productId');

  const [values, setValues] = useState({
    name: "",
    description: "",
    category: "",
    price: "",
  });

  useEffect(() => {
    axios
      .get("http://localhost:8000/products/" + id)
      .then((res) => setValues(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  console.log(id);
  return (
    <div>
      <Link to={'/checkout'} className='btn btn-sm btn-primary me-2'>Add to Cart</Link>
      <div className="d-flex flex-column justify-content-center align-items-center bg-light">
        <h1>List of Products</h1>
        <div className="w-75 rounded bg-white border shadow p-4">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>No</th>
                <th>Name</th>
                <th>Category</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{id}</td>
                <td>{values.name}</td>
                <td>{values.category}</td>
                <td>{values.price}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Cart;
