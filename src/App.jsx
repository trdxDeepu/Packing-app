/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
  { id: 3, description: "Charger", quantity: 12, packed: false },
];

import React, { useState } from "react";

const App = () => {
  const [item, setItems] = useState([]);
  

  function handleItem(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
   
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleItem} />
      <PackingList
        items={item}
        onDeleteItems={handleDeleteItem}
        onToggleItem={handleToggleItem}
      />
      <Stats item={item}  />
    </div>
  );
};

export default App;

function Logo() {
  return <h1> 🏝️ Far Away 🧳</h1>;
}

function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;

    const newItem = { description, quantity, packed: false, id: Date.now() };
    console.log(newItem);
    onAddItems(newItem);

    setDescription("");
    setQuantity(1);
  }

  return (
    <div className="add-form" onClick={handleSubmit}>
      <h3>What do you need for your 😍 trip? </h3>
      <select
        value={quantity}
        onChange={(e) => {
          console.log(e.target.value);
          setQuantity(e.target.value);
        }}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => {
          console.log(e.target.value);
          setDescription(e.target.value);
        }}
      />
      <button type="submit">Add</button>
    </div>
  );
}

function PackingList({ items, onDeleteItems,onToggleItem }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item item={item} onDeleteItems={onDeleteItems} key={item.id} onToggleItem={onToggleItem}  />
        ))}
      </ul>
    </div> 
  );
}

function Stats({item}) {
  const numItem = item.length;
  const numPacked = item.filter((item)=>item.packed).length
  const percentage = Math.round((numPacked/numItem)*100)

  return (
    <footer className="stats">
      <em>🎒You have {numItem} items on your list , and you already packed {numPacked} ({percentage})%</em>
    </footer>
  );
}

function Item({ item, onDeleteItems, onToggleItem }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onToggleItem(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {""}
        {item.quantity}
        {item.description}
      </span>
      <button onClick={() => onDeleteItems(item.id)}>❌</button>
    </li>
  );
}
