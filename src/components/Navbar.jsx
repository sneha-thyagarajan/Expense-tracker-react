import React from "react";
import { Link } from "react-router-dom";

function Navbar(){

    return(
        
        <nav className="navbar">
        <h3>Expense Tracker</h3>
        <div className="desktopMenu"  >
            <Link className="desktopMenuListItem" style={{textDecoration:"none" }} to ="/">Home</Link>
            <Link className="desktopMenuListItem" style={{textDecoration:"none" }} to ="/budget">Create Budget</Link>
        </div> 
        </nav>

            

    )

}

export default Navbar;