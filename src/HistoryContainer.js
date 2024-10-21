import './HistoryContainer.css'

export default function HistoryContainer({total}){
    
    return(
        <div className="history-container">
            <h1>History</h1>
            <div className='amount-container'>
                {total.map((atag,index)=>{
                    return(
                    <div className={`amount-item ${atag.amount<0?'negative':'positive'}`} key={index}>
                    <h4>{atag.text}</h4>
                    <h4>{atag.amount}</h4>
                </div>
                    )
                })}
            </div>
        </div>
    )
}