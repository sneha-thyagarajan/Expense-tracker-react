import React from "react";
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import { Link} from "react-router-dom";
import LinearProgress from '@mui/material/LinearProgress';

 function Budget(){
    return(
        <div>
        <div className="budget">
            <h2>Create Budget</h2>
            <div>
                <h4>Budget Name</h4>
                <FormControl fullWidth sx={{ m: 1 }}>
                    
                    <OutlinedInput placeholder="e.g. Grocery"  color= "secondary" style={{height:"50px"}} />
                    </FormControl>
            </div>
            <div>
                <h4>Amount</h4>
                <FormControl fullWidth sx={{ m: 1 }}>                  
                    <OutlinedInput  startAdornment={<InputAdornment position="start">₹</InputAdornment>} placeholder="Enter your budget" color= "secondary" style={{height:"50px"}} />
                    </FormControl>
            </div>
            <div>
            <button className="startbtn" style={{marginTop:"10px"}}>Create</button>
            </div>


        </div>
        <div className="try">
            <div className="budgetitem">
                <div className="budgetname">
                 <h2>Groceries</h2>
                 <h4>₹ 100</h4>
                </div>
            
                <div>
                    <LinearProgress value="50" variant="determinate"  color="secondary"/>
                </div>
                 <div>
                    <p style={{fontSize:"1rem"}}>₹ 50 spent</p>
                </div>
                <div>
                 <Link to="/expense"> <button className="startbtn" style={{marginTop:"10px"}}>Add Expense</button></Link>  
                </div>


             </div>
       
             <div className="budgetitem">
                <div className="budgetname">
                 <h2>Clothes</h2>
                 <h4>₹ 1000</h4>
                </div>
            
                <div>
                    <LinearProgress value="40" variant="determinate"  color="secondary"/>
                </div>
                 <div>
                    <p style={{fontSize:"1rem"}}>₹ 400 spent</p>
                </div>
                <div>
                    <button className="startbtn" style={{marginTop:"10px"}}>Add Expense</button>
                </div>


             </div>
        </div>
        </div>
    )
}
export default Budget;