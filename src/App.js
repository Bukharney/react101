import Transaction from "./components/Transaction";
import './App.css';
import FormComponent from "./components/Form";
function App() {
  const design = {color: 'red',textAlign: 'center',fontSize: '1.5rem'}
  return (
    <div className='container'>
      <h1 style={design}>Income - Expenses Program</h1>
      <FormComponent/>
      <Transaction/>
    </div>
  );
}

export default App;
