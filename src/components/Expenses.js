import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import ExpensesChart from './ExpensesChart';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("All Years");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const availableYears = [
    ...new Set(props.items.map((expense) => expense.date.getFullYear())),
  ].sort();

  const filteredExpenses =
    filteredYear === "All Years"
      ? props.items
      : props.items.filter(
          (expense) => expense.date.getFullYear().toString() === filteredYear
        );

  return (
    <div className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
        availableYears={availableYears}
      />
      <ExpensesChart expenses={filteredExpenses} />
      {filteredExpenses.length === 0 ? (
        <p>No expenses found for the selected year.</p>
      ) : (
        filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))
      )}
    </div>
  );
}

export default Expenses;
