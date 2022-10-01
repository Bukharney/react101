import { useState } from 'react';
import './Form.css';

const FormComponent = ()=>{
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState(0);

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
            title: title,
            amount: Number(amount)
        }
        console.log(itemData);
        setTitle('');
        setAmount(0);
    }
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
                    <button type="submit" className='btn'>Submit</button>
                </div>
            </form>
        </div>
    );
}

export default FormComponent;