/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from "react-router-dom";

function NavBar() {
    return ( 
        <div className="flex justify-between items-center p-6">
            <h1>Zustand</h1>
            <div className="flex gap-1">
                <Link className="bg-blue-300 p-2 rounded" to="/" >Home</Link>
                <Link className="bg-blue-300 p-2 rounded" to="/about" >About</Link>
            </div>
        </div>
     );
}

export default NavBar;