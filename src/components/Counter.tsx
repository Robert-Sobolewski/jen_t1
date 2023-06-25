import React from "react";

const Counter: React.FC = () => {
  const [count, setCount] = React.useState<number>(0);

  const handleClick = () => {
    console.log("clicked");
    setTimeout(() => {
      setCount((prev) => prev + 1);
    }, 500);
  };
  return (
    <>
      <div className="counter">
        <h1>Value: {count}</h1>
        <p>
          value {count} * 2 = {count * 2}
        </p>
        <button onClick={() => handleClick()}>+</button>
      </div>
    </>
  );
};

export default Counter;
