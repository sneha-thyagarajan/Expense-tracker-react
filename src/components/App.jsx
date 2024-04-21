import React from "react";
import { BrowserRouter as  Router, Route, Switch, Link, Routes} from "react-router-dom";
import Navbar from "./Navbar";
import Budget from "./budget";
import Expense from "./expense";
import Home from "./home";
function App(){
    return(
        <Router>
        <div>
        <Navbar/>
        

        </div>
            <Switch>
                <Route exact path="/" > <Home/> </Route> 
                <Route  exact path="/budget" > <Budget/> </Route>
                <Route path="/expense/:budgetName" component={Expense} />
            </Switch>
            
        </Router>
    );

} 

export default App;