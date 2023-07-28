import React from "react";

function EqualsButton(props) {
    return (
      <button className="col-span-2 p-4 rounded-lg bg-green-500 text-white font-bold text-2xl" onClick={props.onClick}>=</button>
    );
  }

export default EqualsButton;