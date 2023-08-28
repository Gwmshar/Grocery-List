import React from "react";

export default function Stats({ item }) {
  const total = item.length;
  const totalDone = item.filter((a) => a.done).length;
  return (
    <div className="stats">
      <h3>
        {total
          ? total === totalDone
            ? "You have completed all your items"
            : `You have ${total} items in your list from which ${totalDone} are done`
          : "Start adding item🛒"}
      </h3>
    </div>
  );
}
