import React from 'react'

import './ExpenseItem.css'

const ExpenseItem = (props) => {

// const expenseDate = new Date(2022, 6, 6);
// const expenseTitle = 'Car Insurance';
// const expenseAmount = 255.99;

const month = props.date.toLocaleString('en-US', {month: 'long'}); 
const day = props.date.toLocaleString('en-US', { day: '2-digit' });
const year = props.date.getFullYear();

  return (
    <div className='expense-item'>
        <div>
            <div>Month: {month}</div>
            <div>Year: {year}</div>
            <div>Day: {day} </div>
        </div>
        {/* <div> Date: {props.date.toISOString()} </div> */}
        <div className='expense-item__description'>
            <h2> Title: {props.title} </h2>
            <div className='expense-item__price'> $ {props.amount} </div>
        </div>
    </div>
  )
}

export default ExpenseItem