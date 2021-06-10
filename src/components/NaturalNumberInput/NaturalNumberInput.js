/* global BigInt */
import React from "react";
import { stringIsNaturalNumber } from "utils/string-utils";
import "./NaturalNumberInput.css";

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
    const integer = BigInt(value); // we use BigInt to prevent precision errors
    props.setValue(integer);
    props.setResult(undefined);
  }

  return (
    <input
      className="natural-integer-input"
      value={props.value.toLocaleString("fullwide", { useGrouping: false })} // fullwide to prevent scientific notation
      onChange={processInput}
      aria-label="integer-input"
      placeholder="Specify a natural number"
    ></input>
  );
}
