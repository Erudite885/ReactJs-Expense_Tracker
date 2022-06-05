import React from 'react'

import './ExpenseItem.css'

const ExpenseItem = (props) => {

// const expenseDate = new Date(2022, 6, 6);
// const expenseTitle = 'Car Insurance';
// const expenseAmount = 255.99;

  return (
    <div className='expense-item'>
        <div> Date: {props.date.toISOString()} </div>
        <div className='expense-item__description'>
            <h2> Title: {props.title} </h2>
            <div className='expense-item__price'> $ {props.amount} </div>
        </div>
    </div>
  )
}

export default ExpenseItem