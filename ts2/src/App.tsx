import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import './App.css';

function App() {

  const [todos, setTodos] = useState<any>([]);

  const onClickFetchData = () => {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
      setTodos(res.data);
    })
  }

  return (
    <div className="App">
      <h1>Ts project</h1>

      <button onClick={onClickFetchData}>データ取得</button>
    {todos.map((todo) => (
      <p>{todo.title}</p>
    ))}
    </div>
  );
}

export default App;
