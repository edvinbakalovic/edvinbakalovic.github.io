import './App.css';

function App() {
  return (
    <main>
      <h1>$400<span>.00</span></h1>
      <form >
        <div className="basic">
        <input type="text" placeholder={'+200 new samsung tv'} />
        <input type="datetime-local" />
        </div>

        <div className="description">
          <input type="text" />
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
