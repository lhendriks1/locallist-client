import React from "react";

export default function ResultGrid() {
  return (
    <div style={{ width: "100%", textAlign: "left" }}>
      <h2
        style={{
          fontWeight: "normal",
          fontSize: "20px",
          margin: "10px",
          marginLeft: "40px"
        }}
      >
        Showing NUMBER results
      </h2>
      <div className="ResultGrid-col">
        <ul className="grid">
          <li>item1</li>
          <li>item2</li>
          <li>item3</li>
          <li>item4</li>
        </ul>
      </div>
    </div>
  );
}
