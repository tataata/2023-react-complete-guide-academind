import './Card.css';

function Card(props) {
  // make sure that all css classes remain
  //      and the main one for "card" just added 
  const classes = 'card ' + props.className;
  // wrapper for Expencess and ExpenseItem
  // children -- reserved name and the value of 
  //              it will be the cnotent between 
  //              opening and closing tag 
  //              of your component
  return <div className={classes}>{props.children}</div>
}



export default Card;