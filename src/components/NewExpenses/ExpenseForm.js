import React, { useState } from "react";
import NewExpense from "./NewExpense";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [show, setShow] = useState(false);

  const saveExpenseData = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.addExpense(expenseData);
  };

  const showChart = () => {
    if (show === false) {
    } else if (show === true) {
      return <NewExpense />;
    }
  };

  console.log(show, "show state");
  return <div className="new-expense"></div>;
};

export default ExpenseForm;
