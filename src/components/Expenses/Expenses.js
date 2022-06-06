/*
import React, { useState } from 'react'
import { filterExpenses } from '../../utils/helpers'
import ExpenseFilter from '../ExpenseFilter/ExpensesFilter'
import ExpenseList from '../ExpenseList/ExpenseList/'

import PropTypes from 'prop-types'
import ExpensesChart from '../ExpensesChart/ExpensesChart'

const Expenses = ({ expenses }) => {
    const [selectedYear, setSeletedYear] = useState('');

    const yearSelectHandler = (selectedYear) => {
        setSelectedYear(selectedYear);
    }

    const filteredExpenses = filterExpenses(selectedYear, expenses);

    return (
        <div className="expenses">
            <ExpenseFilter selected={selectedYear} onYearSelect={yearSelectHandler} initYear={2020} />
            <ExpenseChart expenses={filteredExpenses} />
            <ExpenseList items={filteredExpenses} year={selectedYear} />

        
        </div>
    )
}

Expenses.propTypes = {
    expenses: PropTypes.array.isRequired,
};


export default Expenses
*/

import React from 'react'

import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card'
import './Expenses.css'

const Expenses = (props) => {
  return (
    <Card className='expenses'>
        <ExpenseItem title={props.items[0].title} amount={props.items[0].amount} date={props.items[0].date} />
        <ExpenseItem title={props.items[1].title} amount={props.items[1].amount} date={props.items[1].date} />
        <ExpenseItem title={props.items[2].title} amount={props.items[2].amount} date={props.items[2].date} />
        <ExpenseItem title={props.items[3].title} amount={props.items[3].amount} date={props.items[3].date} />
        <ExpenseItem title={props.items[4].title} amount={props.items[4].amount} date={props.items[4].date} />
    </Card>
  )
}

export default Expenses