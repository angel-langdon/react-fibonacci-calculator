import React from "react";

export default function IntegerInput(props) {
  function processInput(event) {
    const value = event.target.value;
    // in case the value is an empty string
    // set it and do nothing
    if (value === "") {
      props.setValue(value);
      return;
    }
    // we delete all the numbers inside the string
    // if the result is an empty string, it is an integer
    const isInteger = value.replace(/\d+/, "") === "";
    // in case it is not an integer do nothing
    if (!isInteger) return;
    const integer = parseInt(value);
    props.setValue(integer);
  }

  return (
    <div>
      Specify an integer:
      <input
        value={props.value}
        onChange={processInput}
        aria-label="integer-input"
        style={{ marginLeft: 10 }}
        placeholder={" 23"}
      ></input>
    </div>
  );
}
