import React from "react";
import { stringIsNaturalNumber } from "../utils";

export default function IntegerInput(props) {
  function processInput(event) {
    const value = event.target.value;
    // in case the value is an empty string
    // set it and do nothing
    if (value === "") {
      props.setValue(value);
      props.setResult(undefined);
      return;
    }
    if (!stringIsNaturalNumber(value)) return;
    const integer = parseInt(value);
    props.setValue(integer);
    props.setResult(undefined);
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
