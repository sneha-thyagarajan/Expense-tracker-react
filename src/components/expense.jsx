import React from "react";
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import { useParams } from "react-router-dom";
// import { useState } from 'react';
import { useGlobalState } from "../context/globalstate";


function Expense( ){
    const { budgetName } = useParams();
    const { spent, setSpent, expenseName, setExpenseName, expenseList, setExpenseList } = useGlobalState();
 
    const handleSubmit = (e) => {
        e.preventDefault();
      

        if (spent && expenseName) {
            setExpenseList([...expenseList, { budgetName, expenseName,spent }]);
            setSpent("");
            setExpenseName("");
        }

    }
    return(
        <div>
            <form className="budget" onSubmit={handleSubmit}>
                <h2>Create Expense</h2>
                <div className="expensename">
                    <div>
                        <h4>Expense Name</h4>
                        <FormControl  sx={{ m: 1 }}>
                    
                        <OutlinedInput placeholder="e.g. Coffee"  color= "secondary" value={expenseName}  onChange={(e) => setExpenseName(e.target.value)} style={{height:"50px"}} />
                        </FormControl>
                    </div>
                    <div>
                        <h4>Budget Name</h4>
                        <FormControl sx={{ m: 1 }}>
                    
                        <OutlinedInput placeholder={budgetName} value={budgetName} color= "secondary" style={{height:"50px"}} readonly  />
                        </FormControl>
                    </div>
                </div>
                <div>
                    <h4>Amount</h4>
                    <FormControl fullWidth sx={{ m: 1 }}>                  
                    <OutlinedInput  startAdornment={<InputAdornment position="start">₹</InputAdornment>} placeholder="Enter your expenditure" value={spent} onChange={(e) => setSpent(e.target.value)} color= "secondary" style={{height:"50px"}} />
                    </FormControl>
                </div>
                <div>
                    <button type="submit" className="startbtn" style={{marginTop:"10px"}}>Add</button>
                </div>
            </form>
            <div className="tablebox">
                <h2>Expense List</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Budget Name</th>
                            <th>Expense Name</th>
                            <th>Amount</th>
                            <th> </th>
                        </tr>
                    </thead>
                    <tbody>
                        {  expenseList.length ===0 ? <tr><td colSpan="4">No expenses added yet</td></tr> :                    
                        (expenseList.map((expense, index) => (
                            <tr>
                            <td>{expense.budgetName}</td>
                            <td>{expense.expenseName}</td>
                            <td>₹ {expense.spent}</td>
                            <td><button className="deletebtn" onClick={() => setExpenseList(expenseList.filter((_, i) => i !== index))} >Delete</button></td>
                            </tr>)))
                        }

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Expense;