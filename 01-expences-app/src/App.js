// imports of the comonents that are used in this component
import Header from "./components/Header";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses";

// root component
function App() {
  // array
  const expenses = [
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
    <>
      <Header />
      <NewExpense />

      {/* Upper-case -- custom components */}
      <Expenses items={expenses}/>
    </>
  );
}

// if you want to use it in the other filem you have to export it so it is possible to import
export default App;
