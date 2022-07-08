import React from 'react';
import { Link } from 'react-router-dom';
import PageNotFound from '../assets/images/404.png';
  
const NotFound= () =>{
    return <div>
    <img style={{display: "block",
  marginLeft: "auto",
  marginRight: "auto", width: "50%"}} src={PageNotFound}  />
    <p style={{textAlign:"center"}}>
      <Link to="/">Go to Home </Link>
    </p>
  </div>;
}
  
export default NotFound;