import Item from "./Item";
import "./Transaction.css"

const Transaction = ()=> {
    const data = [
        {title:"Hotel" ,amount:"-2000"},
        {title:"Sarary" ,amount:"20000"},
        {title:"Transit" ,amount:"-500"},
        {title:"Rent" ,amount:"-800"},
    ]
  return(
    <ul className="item-list">
      <Item title = {data[0].title} amount = {data[0].amount}/>
      <Item title = {data[1].title} amount = {data[1].amount}/>
      <Item title = {data[2].title} amount = {data[2].amount}/>
      <Item title = {data[3].title} amount = {data[3].amount}/>
    </ul>
  );
}

export default Transaction;