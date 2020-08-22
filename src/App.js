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

  const name = 'okada';

  const handleclick = () => {
    window.alert("Hello World")
  }
  return (//returnの中がjsx
    <div className="App">
      <header className="App-header">

        <button onClick={increment}>いいね！</button>
        {count}

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

          {name}

        </div>
      </header>
    </div>
  );
}

export default App;