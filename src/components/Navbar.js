import React, { useState } from 'react';
import {NavLink,Route,Switch} from "react-router-dom";
import "../App.css";



const Navbar=()=>{
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
         <div className="container">
          <NavLink className="navbar-brand" exact to='/'>ARTICLE</NavLink>
        </div>
      </nav>
    );
}
export default Navbar;