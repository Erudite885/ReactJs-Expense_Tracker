import React, { useState } from 'react'

import NewExpense from './components/NewExpense/NewExpense'
import Expenses from './components/Expenses/Expenses'


const DUMMY_EXPENSES = [
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

const App = () => {
    const [expenses, setExpenses] = useState(DUMMY_EXPENSES)


    const addExpenseHandler = (expense) => {
        setExpenses(prevExpenses => {
            return [expense, ...prevExpenses]
        })
    }

  return (
    <div>
        <h2> Dynamic Form Elements </h2>
        <NewExpense onAddExpense={addExpenseHandler} />
        <Expenses items={expenses} />
    </div>
  )
}

export default App