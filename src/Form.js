import { useState } from "react";

export default function Form({ onAddItem }) {
  const [description, setDescription] = useState('');
  const [select, setSelect] = useState(1);



  function handlerSubmit(e) {
    e.preventDefault();
    if (!description) return;
    const newItem = { description, select, packed: false, id: Date.now() };
    onAddItem(newItem);
    console.log(newItem);
    setDescription('');
    setSelect(1);
  }
  return <form className="add-form" onSubmit={handlerSubmit}>
    <h3>What do you need for your 😍 trip?</h3>

    <select value={select}
      onChange={e => setSelect(Number(e.target.value))}
    >
      {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
        <option value={num} key={num}>{num}</option>

      )
      )}
    </select>
    <input placeholder="white..."
      value={description}
      onChange={(e) => setDescription(e.target.value)}
    >

    </input>
    <button>ADD</button>


  </form>;
}
