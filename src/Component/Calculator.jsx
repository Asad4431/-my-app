import React, { useState } from 'react';

function Calculator() {
  const [result, setResult] = useState(0);
  const [input, setInput] = useState("");

  const handleNumberClick = (num) => {
    setInput(input + num);
  };

  const handleOperatorClick = (operator) => {
    if (operator === "+") {
      setResult(result + Number(input));
    } else if (operator === "-") {
      setResult(result - Number(input));
    } else if (operator === "*") {
      setResult(result * Number(input));
    } else if (operator === "/") {
      setResult(result / Number(input));
    }

    setInput("");
  };

  const handleClearClick = () => {
    setResult(0);
    setInput("");
  };

  return (
    <div className='MyCalculater'>
        <form action="#">
      <h1>Calculator</h1>
      <h3>Result: {result}</h3>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <br />
      <button onClick={() => handleNumberClick("1")}>1</button>
      <button onClick={() => handleNumberClick("2")}>2</button>
      <button onClick={() => handleNumberClick("3")}>3</button>
      <button onClick={() => handleOperatorClick("+")}>+</button>
      <br />
      <button onClick={() => handleNumberClick("4")}>4</button>
      <button onClick={() => handleNumberClick("5")}>5</button>
      <button onClick={() => handleNumberClick("6")}>6</button>
      <button onClick={() => handleOperatorClick("-")}>-</button>
      <br />
      <button onClick={() => handleNumberClick("7")}>7</button>
      <button onClick={() => handleNumberClick("8")}>8</button>
      <button onClick={() => handleNumberClick("9")}>9</button>
      <button onClick={() => handleOperatorClick("*")}>*</button>
      <br />
      <button onClick={() => handleNumberClick("0")}>0</button>
      {/* <input type="reset" value={Reset} /> */}
      {/* <button type='reset'>Reset</button> */}
      <button onClick={() => handleClearClick()}>Clear</button>
      <button onClick={() => handleOperatorClick("/")}>/</button>
      </form>
    </div>
  );
}

export default Calculator;
