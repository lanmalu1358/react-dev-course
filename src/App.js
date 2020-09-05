import React, { useState } from 'react';
import './App.css';

{
  document.title = "Okada"
}

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
    console.log(count);
  }
  const decrement = () => {
    setCount(count - 1);
    console.log(count);
  }

  const [name, setName] = useState([]);
  // const map = [okada]

  const array = []

  const add = () => {
    const map = name.map(x => x * 2)
    const okada = "okada";

    array.push(okada)
    setName([...name, ...array])
    console.log(name);
  }

  const handleclick = () => {
    window.alert("Hello World")
  }

  return (//returnの中がjsx
    <div className="App">
      <header className="App-header">

        <button onClick={increment}>いいね！</button>
        <button onClick={decrement}>よくないね！</button>
        {count}

        <button onClick={add}>add</button>
        {name}

        <a className="App-link">
          <button
            onClick={handleclick}
          >Hello World</button>
        </a>
        <div>
          <h1>Hello World</h1>
          <h2>Hello World</h2>
          <h3>Hello World</h3>
          <h4>Hello World</h4>

          <button onClick={() => window.alert("Hello World")}>button</button>

          <button>button</button>
          <input type="text" />
          <a href="#">a タグ</a>

          {name.map(data => {
            console.log(data)
            return (
              <div>{data}</div>
            )
          })}

        </div>
      </header>
    </div>
  );
}

export default App;