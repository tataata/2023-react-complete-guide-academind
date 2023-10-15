import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  // Individual declaration of multiple states
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // // Combining multiple states
  // const [userInput, serUserInput] = useState({
  //   setEnteredTitle: '',
  //   setEnteredAmount: '',
  //   setEnteredDate: ''
  // })

  // target.value will always return the string,
  //              so we use strings
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);

    // // Syntax variation for combined states
    // setUserInput({
    //   ...userInput,
    //   setEnteredTitle: event.target.value,
    // })
    // // Syntax variation when change of state depends on the previous state
    // setUserInput((prevState) => {
    //   return {...prevState, setEnteredTitle: event.target.value}
    // })
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);

    // // Syntax variation for combined states
    // setUserInput({
    //   ...userInput,
    //   setEnteredAmount: event.target.value,
    // })
    // // Syntax variation when change of state depends on the previous state
    // setUserInput((prevState) => {
    //   return {...prevState, setEnteredAmount: event.target.value}
    // })
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);

    // // Syntax variation for combined states
    // setUserInput({
    //   ...userInput,
    //   setEnteredDate: event.target.value,
    // })
    // // Syntax variation when change of state depends on the previous state
    // setUserInput((prevState) => {
    //   return {...prevState, setEnteredDate: event.target.value}
    // })
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    // two-way binding: reset values in the inputs
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">  
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle} // for two-way 
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2022-01-02"
            max="2023-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
