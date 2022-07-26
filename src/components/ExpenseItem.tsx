import './ExpenseItem.css';

interface ExpenseItemProps {
  title: string;
  amount: number;
  date: Date;
  day?: string;
  month?: string;
  year?: string;
}

function ExpenseItem(props: ExpenseItemProps) {
  const month = props.date.toLocaleString('default', { month: 'long' });
  const day = props.date.toLocaleString('default', { day: 'numeric' });
  const year = props.date.toLocaleString('default', { year: 'numeric' });
  return (
    <div className='expense-item'>
      <div>
        <div>{month}</div>
        <div>{day}</div>
        <div>{year}</div>
      </div>
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
      </div>
      <div className='expense-item__price'>{props.amount}</div>
    </div>
  );
}

export default ExpenseItem;
