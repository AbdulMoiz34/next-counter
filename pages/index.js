import Button from "@/components/button/Button";
import { useEffect, useState } from "react";

export default function () {
  const [count, setCount] = useState(0);
  const [notNeg, setNeg] = useState(true);

  const increment = () => setCount(count + 1);

  const decrement = () => {
    if (notNeg && count > 0) {
      setCount(count - 1);
    } else if (!notNeg) {
      setCount(count - 1);
    } else {
      alert("Negative numbers aren't allowed.");
    }
  };

  const allowNegativeNumbers = () => {
    const isConfirm = confirm("are you sure?");
    if (isConfirm) setNeg(false);
  }

  const unallowNegativeNumbers = () => {
    const isConfirm = confirm("are you sure?");
    if (isConfirm) setNeg(true);
  }
  return (
    <>
      <div className="h-[70vh] flex justify-center items-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold ">Counter</h1>
          <h1 className="text-xl font-semibold">count  : <span className="text-blue-600">{count}</span></h1>
          <div className="flex gap-2 flex-col items-center">
            <Button text="Increment" clickHandler={increment} />
            <Button text="Decrement" clickHandler={decrement} />
            <Button text="Reset" clickHandler={() => setCount(0)} />
            <button onClick={notNeg ? allowNegativeNumbers : unallowNegativeNumbers} className={`capitalize text-xs   ${notNeg ? `text-red-600 hover:text-gray-600` : `text-blue-600 hover:text-red-600`}`}>
              {notNeg ? "allow " : "prevent"} negative numbers
            </button>
          </div>
        </div>
      </div>
    </>
  );
}