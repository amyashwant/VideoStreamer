import React, { useMemo, useState } from "react";
import { findPrime } from "../Utils/helper";

const Demo = () => {
  const [text, setText] = useState(0);
  const [darktheme, setDarktheme] = useState(false);
    // const prime = findPrime(text);
  const prime = useMemo(() => {
    return findPrime(text);
  }, [text]);

  return (
    <div
      className={
        "ml-4 p-2 w-96 border border-black" +
        (darktheme && " bg-gray-900 text-white")
      }
    >
      <div>
        <button
          className="m-10 p-2 bg-green-200"
          onClick={() => setDarktheme(!darktheme)}
        >
          Toggle
        </button>
      </div>
      <input
        className="border border-cyan-600 p-2"
        type="number"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <div className="font-bold m-4 ">{"value is: " + prime}</div>
    </div>
  );
};

export default Demo;
