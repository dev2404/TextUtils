import React, { useState } from "react";

function FormText(props) {
  const [Text, setText] = useState("Enter Your Text Here");

  const handleUpClick = () => {
    console.log("uppercase was clicked");
    let newText = Text.toUpperCase();
    setText(newText);
  };

  const handleLoClick = () => {
    let newText = Text.toLowerCase();
    setText(newText);
  };

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
  };

  const handleOnChange = (event) => {
    console.log("on change");
    setText(event.target.value);
  };

  return (
    <>
      <div className="mb-3">
        <h1>{props.heading}</h1>
        <textarea
          className="form-control"
          value={Text}
          onChange={handleOnChange}
          id="myBox"
          rows="8"
        ></textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick={handleUpClick}>
        Convert To Uppercase
      </button>

      <button className="btn btn-primary mx-1" onClick={handleLoClick}>
        Convert To Lowercase
      </button>

      <button className="btn btn-primary mx-1" onClick={handleClearClick}>
        Clear Text
      </button>

      <div className="container my-3">
        <h1>Your Text Summary</h1>
        <p>
          {Text.split(" ").length} and {Text.length} characters
        </p>
        <p>{0.008 * Text.split(" ").length} to Read</p>
        <h2>Preview</h2>
        {Text}
      </div>
    </>
  );
}

export default FormText;
