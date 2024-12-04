import './ExpenseDate.css';

function ExpenseDate(props) {
  // Перетворення в об'єкт Date, якщо це рядок
  const date = typeof props.date === 'string' ? new Date(props.date) : props.date;

  // Перевірка на валідність
  if (!(date instanceof Date) || isNaN(date)) {
    console.error('Invalid date passed to ExpenseDate:', props.date);
    return <div>Invalid date</div>;
  }

  const month = date.toLocaleString('en-US', { month: 'long' });
  const day = date.toLocaleString('en-US', { day: '2-digit' });
  const year = date.getFullYear();

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
}

export default ExpenseDate;
