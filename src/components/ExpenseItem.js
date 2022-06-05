import React from 'react'

import './ExpenseItem.css'

const ExpenseItem = () => {
  return (
    <div className='expense-item'>
        <div>Date: June 5th 2022</div>
        <div className='expense-item__description'>
            <h2>Title: Car Insurance</h2>
            <div className='expense-item__price'>Amount: $255.99</div>
        </div>
    </div>
  )
}

export default ExpenseItem