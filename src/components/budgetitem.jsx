import React from "react";
import { Link} from "react-router-dom";
import LinearProgress from '@mui/material/LinearProgress';
import { useGlobalState } from "../context/globalstate";

 function Budgetitem(props){
    const { expenseList } = useGlobalState();

    // Filter the expenseList to get expenditures for the current budget item
    const expendituresForBudget = expenseList.filter(expense => expense.budgetName === props.budgetname);

    // Calculate total spent amount for the current budget item
    const totalSpent = expendituresForBudget.reduce((accumulator, currentExpense) => accumulator + Number(currentExpense.spent), 0);

    // Calculate remaining budget for the current budget item
    const remainingBudget = props.amount - totalSpent;


    
    return(
        <div className="try">
            <div className="budgetitem">
                <div className="budgetname">
                 <h2>{props.budgetname}</h2>
                 <h4>₹ {props.amount}</h4>
                </div>
            
                <div>
                    <LinearProgress value={(remainingBudget/props.amount)*100} variant="determinate"  color="secondary"/>
                </div>
                 <div>
                    <p style={{fontSize:"1rem"}}>₹ {totalSpent} spent</p>
                </div>
                <div>
                 <Link to={`/expense/${encodeURIComponent(props.budgetname)}`}> <button className="startbtn" style={{marginTop:"10px"}}>Add Expense</button></Link>  
                </div>


             </div>
       
        </div>

    )
    
}

export default Budgetitem;