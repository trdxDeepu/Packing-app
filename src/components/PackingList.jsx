/* eslint-disable react/prop-types */
import { useState } from "react";
import Item from "./Item";


export default function PackingList({ items, onDeleteItems, onToggleItem, onClearList }) {
 
  const [sortBy , setSortBy] = useState("input")

  let sortedItem;

  if(sortBy === 'input') sortedItem = items;

  if(sortBy === 'description') sortedItem = items.slice().
  sort((a,b)=>a.description.localeCompare(b.description))

  if(sortBy === 'packed') sortedItem = items.slice().
  sort((a,b)=> Number(a.packed)-Number(b.packed))

  return (
    <div className="list">
      <ul>
        {sortedItem.map((item) => (
          <Item
            item={item}
            onDeleteItems={onDeleteItems}
            key={item.id}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>

        

      <div className="actions">
        <select value={sortBy} onChange={(e)=> setSortBy(e.target.value)}  >
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={onClearList}>Clear List</button>
      </div>
    </div>
  );
}
