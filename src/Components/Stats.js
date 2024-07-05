export default function Stats({ numItems, packedItems, itemPercent }) {
  return <footer className="stats">
    <em>
      💼 You have {numItems} items on your list and you already packed {packedItems} ({itemPercent}%)
    </em>
  </footer>;
}
