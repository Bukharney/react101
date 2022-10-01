import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './Form.css';

const FormComponent = (props)=>{
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState(0);
    const [formValid, setFormValid] = useState(false);

    const inputTitle = (event)=> {
        setTitle(event.target.value);
    }
    const inputAmount = (event)=> {
        setAmount(event.target.value);
    }
    const saveItem = (event)=> {
        event.preventDefault();
        console.log("Data has been saved");
        const itemData = {
            id: uuidv4(),
            title: title,
            amount: Number(amount)
        }
        props.onAddItem(itemData);
        setTitle('');
        setAmount(0);
    }
    
    useEffect(()=>{
        if(amount === 0){
            setFormValid(true);
        }else if(title === ''){
            setFormValid(true);
        }else{
            setFormValid(false);
        }
    },[title,amount]);

    return(
        <div>
            <form onSubmit={saveItem}> 
                <div className="form">
                    <label>Income or Expense Items</label>
                    <input type="text" placeholder="Your income or expense" onChange={inputTitle} value={title}></input>
                </div>
                <div className="form">
                    <label>Amount</label>
                    <input type="number" placeholder=" + for income , - for expense" onChange={inputAmount} value={amount}></input>
                </div>
                <div>
                    <button type="submit" className='btn' disabled = {formValid} >Submit</button>
                </div>
            </form>
        </div>
    );
}

export default FormComponent;