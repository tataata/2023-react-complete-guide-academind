import { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import Card from './Card';
import './ExpenseItem.css';

// A component in React is just a JS FUNCTION
function ExpenseItem(props) {
  // function clickHandler() {}
  // hooks must be called directly on the component function (there is an exeption though)
  // useState wants default value of the state: 
  //    in this case: props.title
  // useState always returns an object consisting of two values:
  //      [0] initial value,
  //      [1] new value.
  const [title, setTitle] = useState(props.title);

  // good practice to use suffix 'Handler' when the function is attached to an event listener
  const clickHandler = () => {
    // changing of setTitle here triggers the re-rendering of the component
    setTitle('Updated!'); 
    console.log(title);
  }
  
  return (
    // we have to have only one root HTML element
    <Card className="expense-item">
      {/* special method needs for rendering the date, as Date-- it an object and can't be output as simple text */}
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{props.amount} EUR</div>
      </div>
      {/* onClick value should have a function as a value */}
      {/* <button onClick={() => {console.log('click inline in the button')}}>Change the title</button> */}
      {/* Do not use `()` when pointing  */}
      <button onClick={clickHandler}>Change the title</button>
    </Card>
  );
}

export default ExpenseItem;
