import React from "react";

function OperationButton(props) {
    return (
      <button className="p-4 rounded-lg bg-yellow-500 text-white font-bold text-2xl" onClick={() => props.onClick(props.operation)}>{props.operation}</button>
    );
  }

  export default OperationButton;