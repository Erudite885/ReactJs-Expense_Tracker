import React from 'react'

import Expenses from './components/Expenses/Expenses'


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
        },
        {
            id: 5,
            title: 'Final Insurance',
            amount: 295.99,
            date: new Date(2021, 1, 15)
        }

    
    ];

  return (
    <div>
        <h2> Dynamic Form Elements </h2>
        <Expenses items={expense} />
    </div>
  )
}

export default App