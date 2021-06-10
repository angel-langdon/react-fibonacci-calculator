import { fireEvent, render, shallow } from "@testing-library/react";
import CalculationResult from "./CalculationResult";

describe("CalculationResult", () => {
  it("should render the results", () => {
    const int = BigInt(12312323123123);
    const comp = render(<CalculationResult result={int} />);
    console.log(comp.toJSON());
    expect(comp.text().includes(int.toLocaleString()).toBe(true));
  });
});
