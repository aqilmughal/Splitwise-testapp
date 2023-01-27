import { Button } from '@mui/joy'
import React from 'react'
import './Expense.css'
import Header from '../Header/header'
import BasicModal from '../Modal/Modal'

const Expense = () => {
  return (
    <>
        <Header />
        <div className='All_expense'>
            <h1>ALL EXPENSE</h1>
                <BasicModal />
            <button>Settle up </button>
        </div>
        <div className='pic_2'>
            <div>
                 <img src='https://assets.splitwise.com/assets/fat_rabbit/empty-table-effed2a2e610373b6407d746cb95858f5d47329c8610bb70f1fd2040dfa35165.png'></img>
            </div>
            <div>
                <h1> You have not added any expenses yet!</h1>
                <h4> To add a new expense, click the “Add an expense” button.</h4>
             </div>
        </div>
    </>
  )
}

export default Expense