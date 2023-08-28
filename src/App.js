import { useState } from "react";
import "./App.css";
import Head from "./components/Head";
import Input from "./components/Input";
import List from "./components/List";
import Stats from "./components/Stats";
function App() {
  const [item, setItem] = useState([]);
  const [sort, setSort] = useState("input");
  const addItem = (items) => {
    if (!items) return;
    setItem((item) => [...item, items]);
  };
  const handleBox = (id) => {
    setItem(item.map((a) => (a.id === id ? { ...a, done: !a.done } : a)));
  };
  const handleClear = () => {
    const isConfirm = window.confirm("Do you want to delete all the items ?");
    if (isConfirm) setItem([]);
  };
  const deleteList = (id) => {
    setItem((item) => item.filter((a) => a.id !== id));
  };
  return (
    <div className="App">
      <Head />
      <Input addItem={addItem} sort={sort} setSort={setSort} />
      <Stats item={item} />
      <List
        item={item}
        handleBox={handleBox}
        handleClear={handleClear}
        sort={sort}
        deleteList={deleteList}
      />
    </div>
  );
}

export default App;
