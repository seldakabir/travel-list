import { useState } from "react";
import  Form  from "./Form";
import  PackingList  from "./PackingList";
import Logo from "./Logo";
import  Stats from "./Stats";
import Item from "./Item";

export default function App() {
  const [item, setItem] = useState([])
  const numItems = item.length;
  const packedItemAll = (item.filter(item => item.packed === true))
  const packedItems = packedItemAll.length
  const itemPercent = ((packedItems / numItems) * 100).toFixed(0)
  
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
  function deleteAllItems() {
    setItem([])
  }
  return <div className="app">
    <Logo />
    <Form onAddItem={handlerAddItem} />
    <PackingList item={item} key={item.id} onDeleteItem={handlerDeleteItem}
      onUpdatePacked={updatePacked}
      onDeleteAllItems={ deleteAllItems} />
    <Stats numItems={numItems} packedItems={packedItems} itemPercent={itemPercent } />
  </div>
}