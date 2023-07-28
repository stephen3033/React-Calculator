import React, {useState} from "react";
import CalculatorDisplay from "./CalculatorDisplay";
import ClearButton from "./ClearButton";
import EqualsButton from "./EqualsButton";
import NumberPad from "./NumberPad";
import OperationButton from "./OperationButton";

function Calculator() {
    const [value, setValue] = useState(0);
    const [operator, setOperator] = useState(null);
    const [previousValue, setPreviousValue] = useState(null);
 
    const handleNumberClick = (number) => {
      setValue((prevValue) => prevValue * 10 + number);
    };
 
    const handleOperationClick = (operation) => {
      setOperator(operation);
      setPreviousValue(value);
      setValue(0);
    };
 
    const handleClearClick = () => {
      setValue(0);
      setOperator(null);
      setPreviousValue(null);
    };
 
    const handleEqualsClick = () => {
      let result;
      switch (operator) {
        case "+":
          result = previousValue + value;
          break;
        case "-":
          result = previousValue - value;
          break;
        case "*":
          result = previousValue * value;
          break;
        case "/":
          result = previousValue / value;
          break;
        default:
          return;
      }
      setValue(result);
      setOperator(null);
      setPreviousValue(null);
    };
 
    return (
      <div className="bg-gray-100 p-4 rounded-lg shadow-lg">
        <CalculatorDisplay value={value} />
        <div className="grid grid-cols-4 gap-4 mt-4">
          <ClearButton onClick={handleClearClick} />
          <NumberPad onClick={handleNumberClick} />
          <div className="col-span-2 grid grid-cols-2 gap-4">
            <EqualsButton onClick={handleEqualsClick} />
            <OperationButton operation="/" onClick={handleOperationClick} />
            <OperationButton operation="*" onClick={handleOperationClick} />
            <OperationButton operation="-" onClick={handleOperationClick} />
            <OperationButton operation="+" onClick={handleOperationClick} />
          </div>
        </div>
      </div>
    );
  }

  export default Calculator;