import { useState } from "react";
import useCalculatorStore from "../store/index";
import { evaluate } from 'mathjs'; // Import the evaluate function from math.js


const Calculator = () => {
  const { components } = useCalculatorStore();
  const [input, setInput] = useState("");

  const calculateResult = () => {
    // try {
    //   setInput(eval(input).toString()); 
    // } catch {
    //   setInput("Error");
    // }
    try {
      setInput(evaluate(input).toString());
    } catch {
      setInput("Error");
    }
  };

  return (
    <div className="p-4 border rounded bg-gray-100">
      <div className="p-2 border bg-white mb-2">{input || "0"}</div>
      <div className="grid grid-cols-4 gap-2">
        {components.map((comp, index) => (
          <button
            key={index}
            className="p-2 border rounded bg-gray-400"
            onClick={() => setInput((prev) => prev + comp.label)}
          >
            {comp.label}
          </button>
        ))}
        <button className="p-2 bg-blue-500 text-white" onClick={calculateResult}>
          =
        </button>
        <button className="p-2 bg-red-500 text-white" onClick={() => setInput("")}>
          C
        </button>
      </div>
    </div>
  );
};

export default Calculator;
