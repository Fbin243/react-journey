export default function Stats({ items }) {
  const numItems = items.length;
  const numPackedItems = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPackedItems / (numItems || 1)) * 100);

  let message = "Start adding some items to your packing list 🚀";

  if (numItems > 0)
    message =
      percentage === 100
        ? "You got everything! Ready to go ✈️"
        : `💼 You have ${numItems} items on your list, and you already packed
${numPackedItems} items (${percentage} %).`;

  return (
    <footer className="stats">
      <em>{message}</em>
    </footer>
  );
}
