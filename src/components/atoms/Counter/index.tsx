import React, { useState } from "react";

interface CounterProps {
  disabled?: boolean;
}

const Counter = ({ disabled }: CounterProps) => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>{count}</p>
      <button disabled={disabled} onClick={() => setCount(count + 1)}>
        increment
      </button>
    </div>
  );
};

export default Counter;
