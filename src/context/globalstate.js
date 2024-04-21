import React, { createContext, useContext, useState } from 'react';

// Create context
const GlobalContext = createContext();

// Provider component
export const GlobalProvider = ({ children }) => {
  const [budgetName, setBudgetName] = useState("");
  const [amount, setAmount] = useState("");
  const [budgetList, setBudgetList] = useState([]);
  const [spent, setSpent] = useState("");
  const [expenseName, setExpenseName] = useState("");
  const [expenseList, setExpenseList] = useState([]);

  return (
    <GlobalContext.Provider value={{
      budgetName, setBudgetName,
      amount, setAmount,
      budgetList, setBudgetList,
      spent, setSpent,
      expenseName, setExpenseName,
      expenseList, setExpenseList
    }}>
      {children}
    </GlobalContext.Provider>
  );
}

// Custom hook to access global state
export const useGlobalState = () => useContext(GlobalContext);
