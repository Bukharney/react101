import Item from "./Item";
import { v4 as uuidv4 } from 'uuid';
import "./Transaction.css"

const Transaction = ()=> {
    const data = [
        {title:"Hotel" ,amount:2000},
        {title:"Sarary" ,amount:20000},
        {title:"Transit" ,amount:500},
    ]
  return(
    <ul className="item-list">
      {data.map((item)=>{
        return <Item {...item} key = {uuidv4()}/>
      })}
    </ul>
  );
}

export default Transaction;