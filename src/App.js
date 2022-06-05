import React from 'react'
import ExpenseItem from './components/ExpenseItem'

const App = () => {

    const expense = [
        {
            id: 1,
            title: 'Car Insurance',
            amount: 255.99,
            date: new Date(2022, 9, 6)
        },
        {
            id: 2,
            title: 'Body Insurance',
            amount: 215.99,
            date: new Date(2022, 6, 6)
        },
        {
            id: 3,
            title: 'Health Insurance',
            amount: 245.99,
            date: new Date(2021, 5, 6)
        },
        {
            id: 4,
            title: 'Motor Insurance',
            amount: 265.99,
            date: new Date(2021, 3, 22)
        }
    
    ];

  return (
    <div>
        <h2>
            Dynamic Form Elements
        </h2>
        <ExpenseItem title={expense[0].title} amount={expense[0].amount} date={expense[0].date} />
        <ExpenseItem title={expense[1].title} amount={expense[1].amount} date={expense[1].date} />
        <ExpenseItem title={expense[2].title} amount={expense[2].amount} date={expense[2].date} />
        <ExpenseItem title={expense[3].title} amount={expense[3].amount} date={expense[3].date} />
    </div>
  )
}

export default App