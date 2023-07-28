import React from "react";

function CalculatorDisplay(props) {
    return (
      <div className="bg-white rounded-lg p-4 text-2xl font-bold">
        {props.value}
      </div>
    );
  }

  export default CalculatorDisplay;