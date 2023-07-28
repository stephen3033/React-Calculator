import React from "react";

function NumberPad(props) {
    return (
      <div className="grid grid-cols-3 gap-4">
        <button className="col-span-2 p-4 rounded-lg bg-gray-200 text-gray-700 font-bold text-2xl" onClick={() => props.onClick(0)}>0</button>
        <button className="p-4 rounded-lg bg-gray-200 text-gray-700 font-bold text-2xl" onClick={() => props.onClick(1)}>1</button>
        <button className="p-4 rounded-lg bg-gray-200 text-gray-700 font-bold text-2xl" onClick={() => props.onClick(2)}>2</button>
        <button className="p-4 rounded-lg bg-gray-200 text-gray-700 font-bold text-2xl" onClick={() => props.onClick(3)}>3</button>
        <button className="p-4 rounded-lg bg-gray-200 text-gray-700 font-bold text-2xl" onClick={() => props.onClick(4)}>4</button>
        <button className="p-4 rounded-lg bg-gray-200 text-gray-700 font-bold text-2xl" onClick={() => props.onClick(5)}>5</button>
        <button className="p-4 rounded-lg bg-gray-200 text-gray-700 font-bold text-2xl" onClick={() => props.onClick(6)}>6</button>
        <button className="p-4 rounded-lg bg-gray-200 text-gray-700 font-bold text-2xl" onClick={() => props.onClick(7)}>7</button>
        <button className="p-4 rounded-lg bg-gray-200 text-gray-700 font-bold text-2xl" onClick={() => props.onClick(8)}>8</button>
        <button className="p-4 rounded-lg bg-gray-200 text-gray-700 font-bold text-2xl" onClick={() => props.onClick(9)}>9</button>
      </div>
    );
  }

  export default NumberPad;