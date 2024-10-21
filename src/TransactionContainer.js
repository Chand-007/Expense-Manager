import './TransactionContainer.css'
import { useState } from 'react'
export default function TransactionContainer({total,setTotal}){
    const [text,setText] = useState('')
    const [amount,setAmount] = useState('')
    function handleClick(){
        if(text.trim() === '' || amount.trim() === ''){
            alert("Enter valid inputs")
            return
        }

        let element = {
            text:text,
            amount:+amount
        }
        setTotal([element,...total])
        setText('')
        setAmount('')
    }

    return(
        <div className="transaction-container">
            <h1>Add new transaction</h1>
            <div className='text-container'>
                <h3>Text</h3>
                <input type="text" value={text} onChange={(e)=>setText(e.target.value)} required/>
            </div>
            <div className = 'amount-input'>
                <h3>Amount</h3>
                <h5>(negative-expense , positive-income)</h5>
                <input type="text" value={amount} onChange={(e)=>setAmount(e.target.value)} pattern="\d+" required/>
            </div>
            <button className='submit' onClick={handleClick}>Add transaction</button>
        </div>
    )
}