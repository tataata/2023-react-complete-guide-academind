// imports of the comonents that are used in this component
import ExpenseItem from "./components/ExpenseItem";

// root component
function App() {
  // array
  const expences = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: "e2",
      title: "New TV",
      amount: 799.49,
      date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  return (
    // this is JSX
    // low-case --
    <div>
      <h2>Hello! Let's get started!</h2>
      <p>I know that I can do it. HURA!</p>
      {/* Upper-case -- custom components */}
      <ExpenseItem
        title={expences[0].title}
        amount={expences[0].amount}
        date={expences[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expences[1].title}
        amount={expences[1].amount}
        date={expences[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expences[2].title}
        amount={expences[2].amount}
        date={expences[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expences[3].title}
        amount={expences[3].amount}
        date={expences[3].date}
      ></ExpenseItem>
    </div>
  );
}

// if you want to use it in the other filem you have to export it so it is possible to import
export default App;
