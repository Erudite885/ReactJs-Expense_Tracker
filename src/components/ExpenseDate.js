import React from 'react'

const ExpenseDate = (props) => {

    const month = props.date.toLocaleString('en-US', {month: 'long'}); 
    const day = props.date.toLocaleString('en-US', { day: '2-digit' });
    const year = props.date.getFullYear();

  return (
    <div>
        <div>Month: {month}</div>
        <div>Year: {year}</div>
        <div>Day: {day} </div>
    </div>
  )
}

export default ExpenseDate