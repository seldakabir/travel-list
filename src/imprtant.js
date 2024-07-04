<select>
      {Array.from({ length: 20 }, (_, i) => i + 1).map
      ((num)=>(
        <option value={num} key={num}>{num}</option>

      )

      
)}
</select>
      
// function updatePacked(id) {
//     setItem(items => items.map(item => item.id === id ?
//       {...item,packed: !item.packed}:item
//     ))
//   }
// function handlerAddItem(item) {
//     setItem(items=>[...items,item])
// }
//   function handlerDeleteItem(id) {
//     setItem(items=>items.filter(item=>item.id!==id))
//   }
