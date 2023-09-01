export default 

function Stats({ item }) {
  const numItem = item.length;
  const numPacked = item.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItem) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything! Ready to go ✈️"
          : `🎒You have ${numItem} items on your list, and your already packed ${numPacked} (${percentage})%`}
      </em>
    </footer>
  );
}


