import Transaction from "./components/Transaction";
import FormComponent from "./components/Form";

import './App.css';
import { useEffect, useState } from "react";
import DataContext from "./data/DataContext";
import ReportComponent from "./components/ReportComponent";
import { element } from "prop-types";

function App() {
  const design = {color: 'red',textAlign: 'center',fontSize: '1.5rem'}
  const [items , setItems] = useState([
    {id: 0, title: "fesfds", amount: 5000},
    {id: 1, title: "fesfds", amount: -1000},
    {id: 2, title: "fesfds", amount: -2000},
    {id: 3, title: "fesfds", amount: 3000},
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
  return (
    <DataContext.Provider value={{
      income:  reportIncome,
      expense: reportExpense
    }}>
      <div className='container'>
        <h1 style={design}>Income - Expenses Program</h1>
        <ReportComponent/>
        <FormComponent onAddItem = {onAddNameItem}/>
        <Transaction items = {items}/>
    </div>
    </DataContext.Provider>
  );
}

export default App;
