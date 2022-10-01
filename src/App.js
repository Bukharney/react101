import Transaction from "./components/Transaction";
import FormComponent from "./components/Form";
import './App.css';
import { useState } from "react";

function App() {
  const design = {color: 'red',textAlign: 'center',fontSize: '1.5rem'}
  const [items , setItems] = useState([]);
  const onAddNameItem = (newItem)=>{
    setItems((prevItem)=>{
      return [newItem,...prevItem]
    });
    console.log('Data from Form = ', newItem);
  }
  return (
    <div className='container'>
      <h1 style={design}>Income - Expenses Program</h1>
      <FormComponent onAddItem = {onAddNameItem}/>
      <Transaction items = {items}/>
    </div>
  );
}

export default App;
