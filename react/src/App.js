import './App.css';
import {useState,useEffect} from "react";

function App() {
  const [name,setName] = useState('');
  const [datetime,setDatetime] = useState('');
  const [description,setDescription] = useState('');
  const [transactions,setTransactions] = useState([]);
  
  useEffect(()=>{
    getTransactions().then(transaction=>{
      setTransactions(transaction);
    })
  },[]);
  
  async function getTransactions(){
    const URL = process.env.REACT_APP_API_URL+'/transactions';
    const response = await fetch(URL);
    return await response.json(); 
  }
  
  async function addNewTransaction(ev){
    ev.preventDefault(); // kontra od defaultnog
      const URL=process.env.REACT_APP_API_URL+'/transaction';
      const price = name.split(' ')[0];
      try{
        const response = await fetch(URL,{
        method: 'POST',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify({
          price,
          name: name.substring(price.length+1),
          description,
          datetime,
        })
      }); 
      
      if(!response.ok)  //vraca status da li je ok sve proslo
      throw new Error('Network response was not OK!');
      
      const json = await response.json();
      setName("");
      setDatetime("");
      setDescription(""); 
      console.log(json);
      
    }
    catch(error){
      console.log('Fetch error:',error);
    }
  }
  
  let balance = 0;
  for(const transaction of transactions){
    balance +=transaction.price;
  }
  balance=balance.toFixed(2);
  return(
    <main>
      <h1>${balance}</h1>
      <form onSubmit={addNewTransaction}>
        <div className="basic">
        <input type="text" 
        value={name} 
        onChange={el=>{
          setName(el.target.value);
          //console.log(name);
        }}
        placeholder={'+200 new samsung tv'} />
        <input type="datetime-local" 
        value={datetime}
        onChange={el=>{
          setDatetime(el.target.value);
          //console.log(datetime);
        }} />
        </div>

        <div className="description">
          <input type="text" 
          value={description}
          onChange={el=>{
            setDescription(el.target.value);
            //console.log(description);
          }} />
        </div>

        <button type="submit">Add new Transaction</button>
      </form>

      <div className="transactions">
        {transactions.length > 0 && transactions.map(transaction=>{
          return(
          <div className="transaction">
          <div className="left">
            <div className="name">{transaction.name}</div>
            <div className="description">{transaction.description}</div>
          </div>
          <div className="rigth">
            <div className={"price " + (transaction.price<0 ? "red" : "green")}>{transaction.price}$</div>
            <div className="datetime">{transaction.datetime}</div>
          </div>
        </div>
       )})}
        
      </div>
    </main>
  );
}

export default App;


