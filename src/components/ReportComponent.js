import { useContext } from "react";
import DataContext from "../data/DataContext";
import './ReportComponent.css'

const ReportComponent = () =>{
    const {income,expense} = useContext(DataContext) 
    const formatNumber=(num)=> {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }
    return(
        <div>
            <h4>Remain (Bath)</h4>
            <h1>฿{formatNumber((income+expense).toFixed(2))}</h1>
            <div className="report-container">
                <div>
                    <h4>Income</h4>
                    <p className="report plus">฿{formatNumber(income.toFixed(2))}</p>
                </div>
                <div>
                    <h4>Expense</h4>
                    <p className="report minus">฿{formatNumber(Math.abs(expense).toFixed(2))}</p>
                </div>
            </div>
        </div>
    );
}
export default ReportComponent;