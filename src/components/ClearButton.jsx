import React from "react";

function ClearButton(props) {
    return (
      <button className="p-4 rounded-lg bg-red-500 text-white font-bold text-2xl" onClick={props.onClick}>C</button>
    );
  }

  export default ClearButton;