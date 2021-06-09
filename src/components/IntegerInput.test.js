import { fireEvent, render, screen } from "@testing-library/react";
import { useState } from "react";
import App from "./App";

const setup = () => {
  const app = render(<App />);
  const integerInput = app.getByLabelText("integer-input");
  return {
    app,
    integerInput,
  };
};

test("It renders input help hint", () => {
  const { app } = setup();
  const helpHintElement = app.getByText(/specify an integer/i);
  expect(helpHintElement).toBeInTheDocument();
});

test("It should not change the input value if a non-integer is specified", () => {
  const { integerInput } = setup();
  // at first it should be empty
  expect(integerInput.value).toBe("");
  // characters
  fireEvent.change(integerInput, { target: { value: "Hello World" } });
  expect(integerInput.value).toBe("");
  // negative numbers
  fireEvent.change(integerInput, { target: { value: "-123123123" } });
  expect(integerInput.value).toBe("");
  // decimal numbers
  fireEvent.change(integerInput, { target: { value: "1,123" } });
  expect(integerInput.value).toBe("");
  fireEvent.change(integerInput, { target: { value: "1.123.1231" } });
  expect(integerInput.value).toBe("");
  // trying integer numbers
  fireEvent.change(integerInput, { target: { value: "45" } });
  expect(integerInput.value).toBe("45");
});
