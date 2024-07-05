import { useState } from "react";
import  Item  from "./Item";

export default function PackingList({ item, onDeleteItem, onUpdatePacked, onDeleteAllItems }) {
  const [sort, setSort] = useState('input');
  let sortItems;
  if (sort === 'input') sortItems = item;
  if (sort === 'description') sortItems = item.slice().sort((a, b) => a.description.localeCompare(b.description));
  if (sort === 'packed') sortItems = item.slice().sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {sortItems.map((item) => (
          <Item item={item} onDeleteItem={onDeleteItem} onUpdatePacked={onUpdatePacked} />

        ))}
      </ul>
      <div className="actions">
        <select value={sort} onChange={e => setSort(e.target.value)}>
          <option value='input'>Sort by input</option>
          <option value='description'>Sort by description</option>
          <option value='packed'>Sort by packed</option>

        </select>
        <button onClick={onDeleteAllItems}>Clear All</button>
      </div>
    </div>
  );
}
