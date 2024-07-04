import { useState } from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
];
export default function App() {
  const [item, setItem] = useState([])
function handlerAddItem(item) {
    setItem(items=>[...items,item])
}
  function handlerDeleteItem(id) {
    setItem(items=>items.filter(item=>item.id!==id))
  }

  function updatePacked(id) {
    setItem(items => items.map(item => item.id === id ?
      {...item,packed: !item.packed}:item
    ))
  }
  return <div className="app">
    <Logo />
    <Form onAddItem={handlerAddItem} />
    <PackingList item={item} key={item.id} onDeleteItem={ handlerDeleteItem} onUpdatePacked={updatePacked} />
    <Stats />
  </div>
}
function Logo() {
  return (
    <h1>🏝️ Far Away 🧳</h1>
  )
}
function Form({onAddItem}) {
  const [description, setDescription] = useState('')
  const [select, setSelect] = useState(1)

  
  
  function handlerSubmit(e) {
    e.preventDefault()
    if (!description) return;
    const newItem = { description, select, packed: false, id: Date.now() }
    onAddItem(newItem);
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
function PackingList({item,onDeleteItem,onUpdatePacked}) {
  return (
    <div className="list">
    <ul>
      {item.map((item) => (
        <Item item={item} onDeleteItem={ onDeleteItem} onUpdatePacked={onUpdatePacked} />

       ))}
    </ul>
  </div>
  );
}
function Item({ item,onDeleteItem,onUpdatePacked }) {
  return(<li>
    <input
      type="checkbox"
      value={item.packed}
      onChange={
      () => onUpdatePacked(item.id)
          }/>
    <span style={item.packed ? {textDecoration:'line-through'}:{}}>
  
      {item.quantity}
         {item.description}</span>
          <button className="button" onClick={()=>onDeleteItem(item.id)}>❌</button>
        </li>)
  
}

function Stats() {
  return <footer className="stats">
    <em>
    💼 You have X items on your list and you already packed X (X%)
  </em>
  </footer>
}