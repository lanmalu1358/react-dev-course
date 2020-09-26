import React, { useState } from 'react';
import './App.css';
import Card from './card';
import { useTable } from 'react-table';



const sampleArray = [
  { id: 1, name: 'aaa', date: 19920527 },
  { id: 2, name: 'bbb', date: 19920528 },
  { id: 3, name: 'ccc', date: 19920529 },
  { id: 4, name: 'ddd', date: 19920531 },
  { id: 5, name: 'eee', date: 19920501 }
];




export default function App() {
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

          {/* {name.map(data => {
            console.log(data)
            return (
              <div>{data}</div>
            )
          })} */}

        </div>
      </header>
      <div>
        <Card name="okada" date="2020/09/05" />
      </div>
      <div>
        {sampleArray.map((data) => {
          return <Card key={data.id} name={data.name} date="2020/09/05" />
        })}
      </div>

      <thead>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>data</th>

        </tr>
      </thead>
      <tbody>{/* mapを使ってひとまとめにする  90行目参考 */}
        {sampleArray.map((data))}

        {/* <tr>
          <td>1</td>
          <td>aaa</td>
          <td>19920527</td>
        </tr>
        <tr>
          <td>2</td>
          <td>bbb</td>
          <td>19920528</td>
        </tr>
        <tr>
          <td>3</td>
          <td>ccc</td>
          <td>19920529</td>
        </tr>
        <tr>
          <td>4</td>
          <td>ddd</td>
          <td>19920531</td>
        </tr>
        <tr>
          <td>5</td>
          <td>eee</td>
          <td>19920501</td>
        </tr> */}
      </tbody>

    </div>
  );
}


