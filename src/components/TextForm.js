import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted into UpperCase", "success");
  };

  const handleLowerClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted into LowerCase", "success");
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copied youy Text", "success");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Removed your Extra space from your text", "success");
  };

  const handleClearClick = () => {
    setText("");
    props.showAlert("Clear your text", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  return (
    <div>
      <div
        className="container mt-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <label htmlFor="myBox" className="form-label">
          <h2>
            Try TextUtils - Word Counter | Character Counter | Remove Extra
            Spaces
          </h2>
        </label>
        <div className="mb-3">
          <textarea
            style={{
              backgroundColor: props.mode === "dark" ? "#233678" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            className="form-control"
            id="myBox"
            rows="8"
            value={text}
            placeholder={"Enter Text Here"}
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          onClick={handleClick}
          className="btn btn-primary mx-1 my-1"
        >
          Convert to upper Case
        </button>
        <button
          disabled={text.length === 0}
          onClick={handleLowerClick}
          className="btn btn-primary mx-1 my-1"
        >
          Convert to Lower Case
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleCopy}
        >
          Copy Text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleExtraSpaces}
        >
          Remove extra spaces
        </button>

        <button
          disabled={text.length === 0}
          onClick={handleClearClick}
          className="btn btn-primary mx-2"
        >
          Clear
        </button>
      </div>
      <div className="container mt-2">
        <h1 style={{ color: props.mode === "dark" ? "white" : "black" }}>
          Your Text Summary
        </h1>
        <p style={{ color: props.mode === "dark" ? "white" : "black" }}>
          {
            text.split(/s+/).filter((e) => {
              return e.length !== 0;
            }).length
          }{" "}
          words and {text.length} character{" "}
        </p>
        <p style={{ color: props.mode === "dark" ? "white" : "black" }}>
          {0.008 *
            text.split(" ").filter((e) => {
              return e.length !== 0;
            }).length}{" "}
          Minutes to Read
        </p>
        <h2 style={{ color: props.mode === "dark" ? "white" : "black" }}>
          Preview
        </h2>
        <p style={{ color: props.mode === "dark" ? "white" : "black" }}>
          {text.length > 1
            ? text
            : "Nothing preview.!!"}
        </p>
      </div>
    </div>
  );
}
