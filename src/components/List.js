import React from "react";

export default function List({
  item,
  handleBox,
  handleClear,
  sort,
  deleteList,
}) {
  let newSort;
  if (sort === "input") {
    newSort = item;
  }
  if (sort === "number") {
    newSort = item.slice().sort((a, b) => a.quantity - b.quantity);
  }
  if (sort === "name") {
    newSort = item.slice().sort((a, b) => a.name.localeCompare(b.name));
  }
  if (sort === "done") {
    newSort = item.slice().sort((a, b) => a.done - b.done);
  }

  return (
    <div className="list">
      <ul>
        {newSort.map((a) => {
          return (
            <li key={a.id} className={a.done ? "done" : ""}>
              <input
                type="checkbox"
                value={item.done}
                onChange={() => handleBox(a.id)}
              />
              {a.quantity} {a.name}
              <button onClick={() => deleteList(a.id)}>❌</button>
            </li>
          );
        })}
      </ul>
      {item.length > 0 && (
        <button className={"clear"} onClick={handleClear}>
          Clear
        </button>
      )}
    </div>
  );
}
