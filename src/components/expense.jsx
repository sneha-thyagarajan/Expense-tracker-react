import React from "react";
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
function Expense(){
    return(
        <div>
            <div className="budget">
                <h2>Create Expense</h2>
                <div className="expensename">
                    <div>
                        <h4>Expense Name</h4>
                        <FormControl  sx={{ m: 1 }}>
                    
                        <OutlinedInput placeholder="e.g. Coffee"  color= "secondary" style={{height:"50px"}} />
                        </FormControl>
                    </div>
                    <div>
                        <h4>Budget Name</h4>
                        <FormControl sx={{ m: 1 }}>
                    
                        <OutlinedInput placeholder="e.g. Grocery"  color= "secondary" style={{height:"50px"}} />
                        </FormControl>
                    </div>
                </div>
                <div>
                    <h4>Amount</h4>
                    <FormControl fullWidth sx={{ m: 1 }}>                  
                    <OutlinedInput  startAdornment={<InputAdornment position="start">₹</InputAdornment>} placeholder="Enter your expenditure" color= "secondary" style={{height:"50px"}} />
                    </FormControl>
                </div>
                <div>
                    <button className="startbtn" style={{marginTop:"10px"}}>Add</button>
                </div>
            </div>
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
                        <tr>
                            <td>Groceries</td>
                            <td>Coffee</td>
                            <td>₹ 50</td>
                            <td><button className="deletebtn">Delete</button></td>
                        </tr>
                        <tr>
                            <td>Clothes</td>
                            <td>Frock</td>
                            <td>₹ 500</td>
                            <td><button className="deletebtn">Delete</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Expense;