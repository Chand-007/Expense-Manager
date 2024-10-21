import './BalanceFigContainer.css'

export default function BalanceFigContainer({expense,income}){
    return(
        <div className="balance-fig-container">
            <div className="expense-container item">
                <h3>Income</h3>
                <h3>${income}</h3>
            </div>
            <div className="balance-container item">
                <h3>Expense</h3>
                <h3>${expense < 0?expense.toString().slice(1):0}</h3>
            </div>
        </div>
    )
}