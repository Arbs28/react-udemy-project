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
    setShow(false);
  };

  const startEditingHandler = () => {
    setShow(true);
  };

  const stopEditingHandler = () => {
    setShow(false);
  };

  console.log(show, "show state");
  return (
    <div className="new-expense">
      {!show && <button onClick={startEditingHandler}>Add New Expense</button>}
      {show && (
        <NewExpense
          onSaveData={saveExpenseData}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default ExpenseForm;
