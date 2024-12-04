import React, { useState, useEffect } from 'react';
import { getExpenses, addExpense } from './ExpenseService';
import Expenses from './components/Expenses';
import NewExpense from './components/NewExpense';
import Loader from './components/Loader';

function App() {
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        const data = await getExpenses();
        const formattedData = data.map((expense) => ({
          ...expense,
          date: new Date(expense.date),
        }));
        setExpenses(formattedData);
      } catch (error) {
        console.error('Error fetching expenses:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchExpenses();
  }, []);

  if (loading) {
    return <Loader />;
  }

  const addExpenseHandler = async (expense) => {
    try {
      const newExpense = await addExpense(expense);
      setExpenses((prevExpenses) => [newExpense, ...prevExpenses]);
    } catch (error) {
      console.error('Error adding expense:', error);
    }
  };

  return (
    <div>
      <h2 className="title">Expense Tracker</h2>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
