import React from "react";
import ExpenseItem from "./components/ExpenseItem";

function App() {

  const expenses = [
    { title: 'Rent', amount: 100, date: new Date(2021,2,28)},
    { title: 'Coffee', amount: 2.50, date: new Date(2021,2,28) },
    { title: 'Restaurant', amount: 300, date: new Date(2021,2,28)},
    { title: 'Grocery', amount: 10, date: new Date(2021,2,28) },
  ]

  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}/>
      <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}/>
      <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}/>
      <ExpenseItem title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date}/>
    </div>
  );
}

export default App;
