import { useState } from "react";

function Calculate() {
  const [count, setCount] = useState(0);

  function plusOne() {
    setCount((prevCount) => prevCount + 1);
  }

  function minusOne() {
    setCount((prevCount) => prevCount - 1);
  }

  function resetValue() {
    setCount(0);
  }
  return (
    <>
      <p>Счетчик: {count}</p>
      <button onClick={plusOne}>plus</button>
      <button onClick={minusOne}>minus</button>
      <button onClick={resetValue}>reset</button>
    </>
  );
}

export default Calculate;
