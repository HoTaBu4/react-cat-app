import React from 'react';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <div> 
        <Link to='images'>Images</Link>
        <Link to='liked'>Liked</Link>
      </div>  
      <div> 
        <Outlet/>
      </div>  
    </>
  );
};

export default Home;