import React from "react";
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
// import { useState } from 'react';
import { useGlobalState } from "../context/globalstate";
import Budgetitem from "./budgetitem";

 function Budget(){
    const { budgetName, setBudgetName, amount, setAmount, budgetList, setBudgetList } = useGlobalState();


    const handleSubmit = (e) => {
        e.preventDefault();
        if (budgetName && amount) {
            setBudgetList([...budgetList, { budgetName, amount }]);
            setBudgetName(""); 
            setAmount("");
        }
    };


    return(
        <div>
        <form className="budget" onSubmit={handleSubmit} >
            <h2>Create Budget</h2>
            <div>
                <h4>Budget Name</h4>
                <FormControl fullWidth sx={{ m: 1 }}>
                    <OutlinedInput placeholder="e.g. Grocery" name="budgetname" value={budgetName}
                            onChange={(e) => setBudgetName(e.target.value)}  color= "secondary" style={{height:"50px"}} />
                </FormControl>
            </div>
            <div>
                <h4>Amount</h4>
                <FormControl fullWidth sx={{ m: 1 }} >                  
                    <OutlinedInput  startAdornment={<InputAdornment position="start">₹</InputAdornment>} value={amount}
                            onChange={(e) => setAmount(e.target.value)} placeholder="Enter your budget" name="amount"  color= "secondary" style={{height:"50px"}} />
                </FormControl>
            </div>
            <div>
            <button type="submit" className="startbtn" style={{marginTop:"10px"}} >Create</button>
            </div>


        </form>
          <div className="budgetsection">
            {budgetList.map((budget, index) => (
                <Budgetitem key={index} budgetname={budget.budgetName} amount={budget.amount} />
                
            ))}

          </div>

        </div>
    )
}
export default Budget;
