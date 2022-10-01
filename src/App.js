import Transaction from "./components/Transaction";
import FormComponent from "./components/Form";

import './App.css';
import { useEffect, useReducer, useState } from "react";
import DataContext from "./data/DataContext";
import ReportComponent from "./components/ReportComponent";
import { element } from "prop-types";

function App() {
  const design = {color: 'red',textAlign: 'center',fontSize: '1.5rem'}
  const [items , setItems] = useState([
    {id: 0, title: "income", amount: 5000},
    {id: 1, title: "expense", amount: -1000},
    {id: 2, title: "expense", amount: -2000},
    {id: 3, title: "income", amount: 3000},
  ]);
  const [reportIncome, setReportIncome] = useState(0)
  const [reportExpense, setReportExpense] = useState(0)
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

  const [showReport, setshowReport] = useState(false)
  const reducer = (state, action)=>{
    switch(action.type){
      case "SHOW" :
        return setshowReport(true)
      case "HIDE" : 
        return setshowReport(false)
    }
  }
  const [result,dispatch] = useReducer(reducer,showReport)
  return (
    <DataContext.Provider value={{
      income:  reportIncome,
      expense: reportExpense
    }}>
      <div className='container'>
        <h1 style={design}>Income - Expenses Program</h1>
        {showReport && <ReportComponent/>}
        <FormComponent onAddItem = {onAddNameItem}/>
        <Transaction items = {items}/>
        <button onClick={()=>{dispatch({type:"SHOW"})}}>SHOW</button>
        <button onClick={()=>{dispatch({type:"HIDE"})}}>HIDE</button>
    </div>
    </DataContext.Provider>
  );
}

export default App;
