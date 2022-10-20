import React, { useState } from "react";
import "../Expenses/Expense.css";
import ExpensesDate from "../Expenses/ExpenseDate";
import Card from "../UI/Card";
const Expense = (props) => {
  const [title, setTitle] = useState(props.title);
  return (
    <Card className="expense-item">
      <ExpensesDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
};

export default Expense;
