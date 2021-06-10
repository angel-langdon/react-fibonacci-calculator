import { fireEvent, render } from "@testing-library/react";
import App from "components/App/App";

const setup = () => {
  const app = render(<App />);
  const naturalNumberInput = app.getByLabelText("integer-input");
  return {
    app,
    naturalNumberInput: naturalNumberInput,
  };
};

describe("NaturalNumberInput", () => {
  it("should not change the input value if a non-integer is specified", () => {
    const { naturalNumberInput } = setup();
    // at first it should be empty
    expect(naturalNumberInput.value).toBe("");
    // characters
    fireEvent.change(naturalNumberInput, {
      target: { value: "Hello World\n" },
    });
    expect(naturalNumberInput.value).toBe("");
    // characters and numbers
    fireEvent.change(naturalNumberInput, {
      target: { value: "12312313 Hello World\n" },
    });
    expect(naturalNumberInput.value).toBe("");
    // negative numbers
    fireEvent.change(naturalNumberInput, { target: { value: "-123123123" } });
    expect(naturalNumberInput.value).toBe("");
    // decimal numbers
    fireEvent.change(naturalNumberInput, { target: { value: "1,123" } });
    expect(naturalNumberInput.value).toBe("");
    fireEvent.change(naturalNumberInput, { target: { value: "1.123.1231" } });
    expect(naturalNumberInput.value).toBe("");
    // trying integer numbers
    fireEvent.change(naturalNumberInput, { target: { value: "45" } });
    expect(naturalNumberInput.value).toBe("45");
    fireEvent.change(naturalNumberInput, { target: { value: "450123123" } });
    expect(naturalNumberInput.value).toBe("450123123");
    fireEvent.change(naturalNumberInput, {
      target: { value: "450123112312312312312312313312323" },
    });
    expect(naturalNumberInput.value).toBe("450123112312312312312312313312323");
  });
});
