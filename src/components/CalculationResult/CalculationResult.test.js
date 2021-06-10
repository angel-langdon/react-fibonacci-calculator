import React from "react";
import TestRenderer from "react-test-renderer";
import CalculationResult from "./CalculationResult";

describe("CalculationResult", () => {
  it("should render the results", () => {
    const int = BigInt(12312323123123);
    const testInstance = TestRenderer.create(
      <CalculationResult result={int} />
    ).root;
    const content = testInstance.findByProps({ className: "content" });
    expect(content.children.includes(int.toLocaleString())).toBe(true);
  });
});

it("should loader if isLoading is true", () => {
  const int = BigInt(12312323123123);
  const testInstance = TestRenderer.create(
    <CalculationResult result={int} isLoading={true} />
  ).root;
  const content = testInstance.findByProps({ className: "loader" });
});
