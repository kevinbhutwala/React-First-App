import React, { useState } from "react";

export default function TextForm() {
  const [text, setText] = useState("Enter Text Here");

  const handleClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLowerClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleClearClick = () => {
    setText('');
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  return (
    <div>
      <div class="container">
        <label for="myBox" class="form-label">
          <h2>Example of Text</h2>
        </label>
        <div class="mb-3">
          <textarea
            class="form-control"
            id="myBox"
            rows="8"
            value={text}
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button onClick={handleClick} className="btn btn-primary mx-2">
          Convert to upper Case
        </button>
        <button onClick={handleLowerClick} className="btn btn-primary mx-2">
          Convert to Lower Case
        </button>
        <button onClick={handleClearClick} className="btn btn-primary mx-2">
          Clear
        </button>
      </div>
      <div class="container">
        <h1>Your Text Summary</h1>
        <p>
          {text.split(" ").length} words and {text.length} character
        </p>
        <p>{0.008 * text.split(" ").length} Minutes to Read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </div>
  );
}
