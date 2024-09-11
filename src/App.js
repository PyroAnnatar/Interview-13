import React, { useEffect, useState } from "react";

function App() {
  return <CustomProgram />;
}

const half = (number) => number / 2;
const double = (number) => number * 2;
const increment = (number) => number + 1;
const decrement = (number) => number - 1;

const CustomProgram = () => {
  const [operations, setOperations] = useState([]);
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");
  const [historyValue, setHistoryValue] = useState("");

  const operationDictionary = { half, double, increment, decrement };

  function operationBonanza(operation) {
    setOperations((prev) => [...prev, operation]);
  }
  // console.log(operations);

  function handleSend() {
    let result = parseFloat(value.trim());
    if (!isNaN(result)) {
      setHistoryValue(value);
      operations.forEach(
        (operation) => (result = operationDictionary[operation](result))
      );
      setResult(result);
    }
  }

  function handleClear() {
    setValue("");
    setOperations([]);
    setResult("");
    setHistoryValue("");
  }

  return (
    <>
      <div>
        <button
          className="border-[1px] border-black p-1 bg-gray-200 hover:bg-gray-300"
          onClick={() => operationBonanza("half")}
        >
          Half
        </button>
        <button
          className="border-[1px] border-black p-1 bg-gray-200 hover:bg-gray-300"
          onClick={() => operationBonanza("double")}
        >
          Double
        </button>
        <button
          className="border-[1px] border-black p-1 bg-gray-200 hover:bg-gray-300"
          onClick={() => operationBonanza("increment")}
        >
          Increment
        </button>
        <button
          className="border-[1px] border-black p-1 bg-gray-200 hover:bg-gray-300"
          onClick={() => operationBonanza("decrement")}
        >
          Decrement
        </button>
        <button
          onClick={handleClear}
          className="border-[1px] border-black p-1 bg-gray-200 hover:bg-gray-300 ml-4"
        >
          Clear
        </button>
      </div>
      <div className="text-center my-4">
        <h2 className="font-bold text-2xl">My Function</h2>
        <ul>
          {operations.length > 0 &&
            operations.map((operation, index) => (
              <li key={index} className="my-4">
                {operation}
              </li>
            ))}
        </ul>
      </div>
      <div className="text-center">
        <input
          type="text"
          className="border-[1px] border-black p-1"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button
          onClick={handleSend}
          className="border-[1px] border-black p-1 bg-gray-200 hover:bg-gray-300"
        >
          Send
        </button>
      </div>
      <div className="text-center my-4">
        <p>Last operation:</p>
        {result && <p>{`${historyValue} > My Function > ${result}`}</p>}
      </div>
    </>
  );
};

export default App;
