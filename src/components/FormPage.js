import React, { useState } from "react";
export default function FormPage(props) {
  const [text, setText] = useState("");
  const handelUpClick = () => {
    let myText = text.toUpperCase();
    setText(myText);
    props.displayAlert(" Converted to Uppercase! ✔", "success");
  };
  const handelLoClick = () => {
    let myText = text.toLowerCase();
    setText(myText);
    props.displayAlert(" Converted to Lowercase! ✔", "success");
  };
  const handelClear = () => {
    setText("");
    props.displayAlert(" Text cleared! ✔", "success");
  };
  const handelCopy = () => {
    navigator.clipboard.writeText(text);
    props.displayAlert(" Copied to clipboard! ✔", "success");
  };
  const handelRemoveSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.displayAlert(" extra spaces have been removed! ✔", "success");
  };
  const handelOnChange = (event) => {
    setText(event.target.value);
  };
  return (
    <>
      <div className={`mb-3 text-${props.mode === "light" ? "dark" : "light"}`}>
        <label
          htmlFor="exampleFormControlTextarea1"
          className="form-label"
        ></label>
        <h2>
          TextUtils - Word counter,Reading speed,Remove extra space,Text
          Manipulator
        </h2>
        <textarea
          className={`form-control text-${
            props.mode === "light" ? "dark" : "light"
          }`}
          style={{
            backgroundColor: props.mode === "dark" ? "#162336" : "white",
          }}
          value={text}
          onChange={handelOnChange}
          id="exampleFormControlTextarea1"
          rows="8"
        ></textarea>
      </div>
      <button
        className="btn btn-primary mx-2 my-2"
        disabled={text.length === 0}
        onClick={handelUpClick}
      >
        Convert to UpperCase
      </button>
      <button
        disabled={text.length === 0}
        className="btn btn-primary mx-2 my-2"
        onClick={handelLoClick}
      >
        Convert to LowerCase
      </button>
      <button
        disabled={text.length === 0}
        className="btn btn-primary mx-2 my-2"
        onClick={handelClear}
      >
        Clear
      </button>
      <button
        disabled={text.length === 0}
        className="btn btn-primary mx-2 my-2"
        onClick={handelCopy}
      >
        Copy Text
      </button>
      <button
        disabled={text.length === 0}
        className="btn btn-primary mx-2 my-2"
        onClick={handelRemoveSpace}
      >
        Remove extra spaces
      </button>
      <div
        className={`container text-${
          props.mode === "light" ? "dark" : "light"
        }`}
      >
        <h2>Your text summery</h2>
        <p>
          Your text contains "
          {
            text.split(/\s+/).filter((ele) => {
              return ele.length !== 0;
            }).length
          }
          " Words and "{text.length}" Characters
        </p>
        <p>
          {" "}
          You can read the whole text in"
          {text.split(/\s+/).filter((ele) => {
            return ele.length !== 0;
          }).length * 0.08}
          " seconds to read
        </p>
      </div>
      <div
        className={`container text-${
          props.mode === "light" ? "dark" : "light"
        }`}
      >
        <h2>Preview</h2>
        {text.length > 0 ? text : "No text To Preview"}
      </div>
    </>
  );
}
