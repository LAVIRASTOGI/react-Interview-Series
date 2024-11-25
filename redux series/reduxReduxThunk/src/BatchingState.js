import { useState } from "react";

function BatchingState() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    // Multiple setCount calls in an asynchronous function
    setTimeout(() => {
      setCount(count + 1); // Update 1  0+1
      setCount(count + 1); // Update 2 – 0+1
      setCount(count + 1); // Update 3  -0+1

      setCount((prevCount) => prevCount + 1); // Update 1 - 3
      setCount((prevCount) => prevCount + 1); // Update 2 - 6
      setCount((prevCount) => prevCount + 1); // Update 3  -9

      // With automatic batching, React 18 will group these updates into a single re-render
    }, 1000);
  };

  console.log("Rendered with count:", count);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increase Count</button>
    </div>
  );
}

export default BatchingState;
