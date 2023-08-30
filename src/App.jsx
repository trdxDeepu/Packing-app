/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 2, description: "Charger", quantity: 12, packed: false },
];

import React from "react";

const App = () => {
  return (
    <div className="app">
      <Logo />
      {/* <Form />
      <PackingList />
      <Stats /> */}
    </div>
  );
};

export default App;

function Logo() {
  return <h1> 🏝️ Far Away 🧳</h1>;
}

function Form() {
  return (
    <div className="add-form">
      <h3>What do you need for your 😍 trip? </h3>
      <select name="" id="">
      {
        Array.from({length:20},(_,i)=>i+1).map((num) => (
          <option value={num} key={num}>{num}</option>
        ))
      }
      </select>
      <input type="text" placeholder="Item..." />
      <button>Add</button>
    </div>
  );
}

function PackingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item item={item} />
        ))}
      </ul>
    </div>
  );
}

function Stats() {
  return (
    <footer className="stats">
      <em>🎒You have X items on your list , and you already packed X (X%)</em>
    </footer>
  );
}


