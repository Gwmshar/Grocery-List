import { useState } from "react";

export default function Input({ addItem, sort, setSort }) {
  const [input, setInput] = useState("");
  const [quantity, setQuantity] = useState(1);
  let newItem = {};
  const handleSubmit = (e) => {
    e.preventDefault();
    newItem = {
      id: Date.now(),
      name: input,
      quantity: quantity,
      done: false,
    };
    addItem(newItem);
    setInput("");
    setQuantity(1);
  };
  return (
    <div className="input">
      <form className="inputAdd" onSubmit={handleSubmit}>
        <select
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        >
          {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => {
            return (
              <option value={num} key={num}>
                {num}
              </option>
            );
          })}
        </select>
        <input
          type="text"
          placeholder="Grocery items"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button>Add</button>
      </form>
      <select value={sort} onChange={(e) => setSort(e.target.value)}>
        <option value={"input"}>sort by input</option>
        <option value={"number"}>sort by numbers</option>
        <option value={"name"}>sort by name</option>
        <option value={"done"}>sort by done</option>
      </select>
    </div>
  );
}
