import React from "react";

// we set default height to prevent moving the elements
// when we have calculated a results
const HEIGHT_RESULTS_CONTAINER = 100;
export default function CalculationResult(props) {
  if (props.result === undefined)
    return (
      <div
        aria-label="empty-div"
        style={{
          minHeight: HEIGHT_RESULTS_CONTAINER,
          maxHeight: HEIGHT_RESULTS_CONTAINER,
        }}
      />
    );
  return (
    <div
      className="row wrap-content"
      aria-label="results-container"
      style={{
        maxWidth: "80%",
        maxHeight: HEIGHT_RESULTS_CONTAINER,
        minHeight: HEIGHT_RESULTS_CONTAINER,
      }}
    >
      <h3>Result: {props.result.toLocaleString()}</h3>
    </div>
  );
}
