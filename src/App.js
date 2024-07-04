import { useState } from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
];
export default function App() {

  return <div className="app">
    <Logo />
    <Form />
    <PackingList />
    <Stats />
  </div>
}
function Logo() {
  return (
    <h1>🏝️ Far Away 🧳</h1>
  )
}
function Form() {
  const [description, setDescription] = useState('')
  const [select, setSelect] = useState(1)
  
  function handlerSubmit(e) {
    e.preventDefault()
    if (!description) return;
    const newItem = { description, select, packed: false, id: Date.now() }
    console.log(newItem);
    setDescription('')
    setSelect(1)
  }
  return <form className="add-form" onSubmit={handlerSubmit}>
    <h3>What do you need for your 😍 trip?</h3>
    
    <select value={select}
      onChange={e=>setSelect(Number(e.target.value))}
    >
      {Array.from({ length: 20 }, (_, i) => i + 1).map
      ((num)=>(
        <option value={num} key={num}>{num}</option>

      )
)}
      </select>
    <input placeholder="white..."
      value={description}
      onChange={(e)=>setDescription(e.target.value)}
    >
     
    </input>
      <button>ADD</button>
   
    
    </form>
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
function Item({ item }) {
  return(<li>
          <input type="checkbox" checked={item.packed }></input>
    <span style={item.packed? {textDecoration:'line-through'}:{}}>
      {' '}
      {item.quantity}
         {item.description}</span>
          <button className="button">❌</button>
        </li>)
  
}

function Stats() {
  return <footer className="stats">
    <em>
    💼 You have X items on your list and you already packed X (X%)
  </em>
  </footer>
}