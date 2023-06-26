import React from 'react';
import './App.css';
import { UserCard } from './components/UserCard';

const user = {
  id: 1,
  name: "kohta",
  email: "dsafhsadh",
  address: "dsafhkj",
}

function App() {
  return (
    <div className="App">
      <h1>sample code</h1>
      <UserCard user={user} />
    </div>
  );
}

export default App;
