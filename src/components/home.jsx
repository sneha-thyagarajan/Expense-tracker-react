import React from "react";
import piggy from "../images/piggy1.png";
import { Link} from "react-router-dom";

function Home(){
    return(
        <div>

            <div className="main">

                <div className="start">
                    <div className="startcontent">
                    <h1>Expense Tracker</h1>
                    <p> Track expenses, set budgets, and achieve financial goals
                     effortlessly.Take control of your finances with Expense Tracker!</p>
                    <Link to="/budget"><button className="startbtn">Get Started</button></Link>
                    </div>
                    <div className="startimage">
                        <img src={piggy} alt="piggy" draggable="false" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;