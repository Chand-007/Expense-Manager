import ExpenseTracker from './ExpenseTracker';
import './App.css';
import { useState } from 'react';
import Barchart from './Barchart';
function App() {

  const [dashboard,setDashboard] = useState(false)
  const [income,setIncome] = useState(0)
  const [expense,setExpense] = useState(0)
  console.log("App.js Component is reloaded")
  return (
    <div className="App">
      
      <ExpenseTracker dashboard={dashboard} setDashboard={setDashboard} income={income} 
      setIncome={setIncome} expense={expense} setExpense={setExpense}/>
      {dashboard && <Barchart dashboard={dashboard} setDashboard={setDashboard} income={income} expense={expense}/>}
    </div>
  );
}

export default App;
