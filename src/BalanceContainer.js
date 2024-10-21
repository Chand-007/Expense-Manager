import './BalanceContainer.css'

export default function BalanceContainer({balance}){
    return(
        <div className="balance-container">
            <h3>Your Balance</h3>
            <h3>$ {balance}</h3>
        </div>
    )
}