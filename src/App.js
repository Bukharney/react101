import Transaction from "./components/Transaction";
import FormComponent from "./components/Form";

import './App.css';
import { useEffect, useState } from "react";
import DataContext from "./data/DataContext";
import ReportComponent from "./components/ReportComponent";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const design = {color: 'black',textAlign: 'center',fontSize: '1.5rem'}
  const [items , setItems] = useState([]);
  const [reportIncome, setReportIncome] = useState(0.0)
  const [reportExpense, setReportExpense] = useState(0.0)
  const onAddNameItem = (newItem)=>{
    setItems((prevItem)=>{
      return [newItem,...prevItem]
    });
  }
  useEffect(()=>{
      const amounts = items.map(items => items.amount)
      const income = amounts.filter(element=>element>0).reduce((total,element)=>total+=element,0)
      const expense = amounts.filter(element=>element<0).reduce((total,element)=>total+=element,0)
      setReportExpense(expense)
      setReportIncome(income)
  },[items,reportIncome,reportExpense])
  return (
    <DataContext.Provider value={{income:reportIncome, expense:reportExpense}}>
      <div className='container'>
        <h1 style={design}>Income - Expenses Program</h1>
        <Router>
          <div>
            <ul className="horizontal-menu">
              <li>
                <Link to="/">Account data</Link>
              </li>
              <li>
                <Link to="/insert">Manage data</Link>
              </li>
            </ul>
            <Routes>
              <Route path='/' element={<ReportComponent/>}></Route>
              <Route path='/insert' element={<><FormComponent onAddItem = {onAddNameItem}/> <Transaction items = {items}/> </>}></Route>
            </Routes>
          </div>
        </Router>
    </div>
    </DataContext.Provider>
  );
}

export default App;
