import React, { useState } from 'react'

import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card'
import './ExpenseItem.css'

const ExpenseItem = (props) => {
// const expenseDate = new Date(2022, 6, 6);
// const expenseTitle = 'Car Insurance';
// const expenseAmount = 255.99;

 const [title, setTitle] = useState(props.title);

  return (
    <Card className='expense-item'>
        <ExpenseDate date={props.date} />
        {/* <div> Date: {props.date.toISOString()} </div> */}
        <div className='expense-item__description'>
            <h2> {props.title} </h2>
            <div className='expense-item__price'> $ {props.amount} </div>
        </div>
        {/* <button onClick={clickHandler}>Change Title</button> */}
    </Card>
  )
}

export default ExpenseItem