import React, { useState } from "react";

export default function Input({ addMessages }) {
  const [input, setInput] = useState("");

  function onChange(event) {
    setInput(event.target.value);
  }

  function onKeyDown(event) {
    const value = event.target.value;
    if (event.key === "Enter" && value) {
      addMessages(value);
      setTimeout(() => {
        setInput("");
      }, 0);
    }
  }

  return (
    <div className="conver__input">
      <textarea
        rows="2"
        placeholder="Enter a message"
        className="conver__field"
        value={input}
        onChange={onChange}
        onKeyDown={onKeyDown}
      ></textarea>
    </div>
  );
}
