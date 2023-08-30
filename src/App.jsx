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
