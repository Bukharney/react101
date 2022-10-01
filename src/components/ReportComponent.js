import { useContext } from "react";
import DataContext from "../data/DataContext";
import './ReportComponent.css'

const ReportComponent = () =>{
    const {income,expense} = useContext(DataContext) 
    return(
        <div>
            <h4>Remain (Bath)</h4>
            <h1>฿{income+expense}</h1>
            <div className="report-container">
                <div>
                    <h4>Income</h4>
                    <p className="report plus">฿{income}</p>
                </div>
                <div>
                    <h4>Expense</h4>
                    <p className="report minus">฿{Math.abs(expense)}</p>
                </div>
            </div>
        </div>
    );
}
export default ReportComponent;