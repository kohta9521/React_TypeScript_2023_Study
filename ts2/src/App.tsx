import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import './App.css';
import Todo from './Todo';

type TodoType = {
  "userId": number;
  "id": number;
  "title": string;
  "completed": boolean;
};

function App() {

  const [todos, setTodos] = useState<TodoType>([]);

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
      <Todo title={todo.title} userid={todo.userId} />
    ))}
    </div>
  );
}

export default App;
