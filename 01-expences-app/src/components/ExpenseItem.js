import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

// A component in React is just a JS FUNCTION
function ExpenseItem(props) {
  return (
    // we have to have only one root HTML element
    <div className="expense-item">
      {/* special method needs for rendering the date, as Date-- it an object and can't be output as simple text */}
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount} EUR</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
