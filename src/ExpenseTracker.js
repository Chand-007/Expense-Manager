import './ExpenseTracker.css'
import BalanceContainer from './BalanceContainer'
import BalanceFigContainer from './BalanceFigContainer'
import HistoryContainer from './HistoryContainer'
import TransactionContainer from './TransactionContainer'

import { useState,useEffect } from 'react'

export default function ExpenseTracker(){
    const [total,setTotal] = useState([])
    const [balance,setBalance] = useState(0)
    const [income,setIncome] = useState(0)
    const [expense,setExpense] = useState(0)
    useEffect(()=>{
        calculateExpense()
    },[total])

    function calculateExpense(){
        let totalExpense = total.reduce((accumulator,currentValue)=>accumulator+(currentValue.amount<0?currentValue.amount:0),0)
        let totalIncome = total.reduce((accumulator,currentValue)=>accumulator+(currentValue.amount>=0?currentValue.amount:0),0)
        let totalBalance = totalIncome + totalExpense
        setExpense(totalExpense)
        setIncome(totalIncome)
        setBalance(totalBalance)
    }
    return(
        <div className="tracker-container">
            <h1>Expense Tracker</h1>
            <BalanceContainer balance={balance}/>
            <BalanceFigContainer expense={expense} income={income}/>
            <HistoryContainer total={total}/>
            <TransactionContainer total={total} setTotal={setTotal}/>
        </div>
    )
}