import React, { useState } from "react";
import "./NewExpense.css";
const NewExpense = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const clear = () => {
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };
  const saveTitle = (event) => {
    setEnteredTitle(event.target.value);
  };
  const saveAmount = (event) => {
    setEnteredAmount(event.target.value);
  };
  const saveDate = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    props.passData(expenseData);
    clear();
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={saveTitle} value={enteredTitle} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            step="0.1"
            onChange={saveAmount}
            value={enteredAmount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={saveDate}
          />
        </div>
      </div>
      <button type="submit">Add New Expense</button>
      <button type="button" onClick={props.onCancel}>
        Close
      </button>
    </form>
  );
};

export default NewExpense;
