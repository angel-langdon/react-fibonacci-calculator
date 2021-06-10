import React from "react";
import "./CalculationResult.css";

export default function CalculationResult(props) {
  const className = "results-container";

  if (props.isLoading)
    return (
      <div className={className}>
        <div className="loader " />
      </div>
    );
  if (props.result === undefined)
    return <div aria-label="empty-div" className={className} />;
  return (
    <div className={"row " + className} aria-label={className}>
      <h3 className="content">Result: {props.result.toLocaleString()}</h3>
    </div>
  );
}
