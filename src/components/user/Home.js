import React from "react";

const Home = () => {

  const id = sessionStorage.getItem('id');

  return (
    <div>
      <h1>Id : {id}</h1>
    </div>
  );
};

export default Home;
