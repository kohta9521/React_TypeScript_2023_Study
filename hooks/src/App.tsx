import React from 'react';
import './App.css';


const dummyBooks: BookToRead[] = [
  {
    id: 1,
    title: "初めてのReact",
    authors: "ダミー",
    memo: "",
  },
  {
    id: 1,
    title: "React Hooks入門",
    authors: "ダミー",
    memo: "",
  },
  {
    id: 3,
    title: "実践Reactアプリケーション",
    authors: "ダミー",
    memo: "",
  }
]

function App() {
  return (
    <div className="App">
      <h1>sample code</h1>
    </div>
  );
}

export default App;
