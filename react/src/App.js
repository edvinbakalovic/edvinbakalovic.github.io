import './App.css';
import {useState} from "react";

function App() {
  const [name,setName] = useState('');
  const [datetime,setDatetime] = useState('');
  const [description,setDescription] = useState('');
  function addNewTransaction(ev){
      ev.preventDefault(); // kontra od defaultnog
      const url=process.env.REACT_APP_API_URL+'/transaction';
      console.log(url);
      fetch(url,{
        method:'POST',
        headers:{'Content-Type:':'application/json'},
        body: JSON.stringify({name,description,datetime})
      }).then(response=>{
        response.json().then(json=>{
          console.log('result',json);
        });
      });
  }


  return (
    <main>
      <h1>$400<span>.00</span></h1>
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
        <div className="transaction">
          <div className="left">
            <div className="name">New Samsung TV</div>
            <div className="description">It waas time for new tw</div>
          </div>
          <div className="rigth">
            <div className="price red">-$500</div>
            <div className="datetime">2022-12-18 15:45</div>
          </div>
        </div>
      </div>

      <div className="transactions">
        <div className="transaction">
          <div className="left">
            <div className="name">GIg job new website</div>
            <div className="description">It waas time for new tw</div>
          </div>
          <div className="rigth">
            <div className="price green">+$400</div>
            <div className="datetime">2022-12-18 15:45</div>
          </div>
        </div>
      </div>

      <div className="transactions">
        <div className="transaction">
          <div className="left">
            <div className="name">IPhone</div>
            <div className="description">It waas time for new tw</div>
          </div>
          <div className="rigth">
            <div className="price red">-$900</div>
            <div className="datetime">2022-12-18 15:45</div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;


