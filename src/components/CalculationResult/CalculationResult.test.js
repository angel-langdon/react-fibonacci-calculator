import React from "react";
import TestRenderer from "react-test-renderer";
import CalculationResult, { CLASS_NAME } from "./CalculationResult";

describe("CalculationResult", () => {
  it("should render the result if it its passed as a prop", () => {
    const int = BigInt(12312323123123);
    const testInstance = TestRenderer.create(
      <CalculationResult result={int} />
    ).root;
    const content = testInstance.findByProps({ className: "content" });
    expect(content.children.includes(int.toLocaleString())).toBe(true);
  });

  it("should render loader div if isLoading is true", () => {
    const testInstance = TestRenderer.create(
      <CalculationResult result={undefined} isLoading={true} />
    ).root;
    const content = testInstance.findByProps({ className: "loader" });
    expect(content).toBeTruthy();
  });

  it("should render an empty div if result is undefined and isLoading is false", () => {
    const testInstance = TestRenderer.create(
      <CalculationResult result={undefined} isLoading={false} />
    ).root;
    const content = testInstance.findByProps({
      className: "empty-div " + CLASS_NAME,
    });
    expect(content).toBeTruthy();
  });
});
