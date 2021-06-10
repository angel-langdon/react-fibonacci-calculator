import App from "./App";
import TestRenderer from "react-test-renderer";

const { act } = TestRenderer;
describe("App integration tests", () => {
  it("renders fibonacci result if everything is done properly", () => {
    const app = TestRenderer.create(<App />).root;
    const input = app.findByProps({ className: "natural-integer-input" });
    act(() => {
      input.props.onChange({ target: { value: "10" } });
    });
    const button = app.findByProps({ className: "calculate-fibonacci-button" });
    act(() => {
      button.props.onClick();
    });
    const resultConainer = app.findByProps({
      className: "row result-container",
    });
    const result = resultConainer.findByProps({ className: "content" });
    expect(result.children.includes("55")).toBe(true);
  });

  it("renders empty div if invalid input is specified", () => {
    const app = TestRenderer.create(<App />).root;
    const input = app.findByProps({ className: "natural-integer-input" });
    act(() => {
      input.props.onChange({ target: { value: "Hello World!" } });
    });
    const button = app.findByProps({ className: "calculate-fibonacci-button" });
    act(() => {
      button.props.onClick();
    });
    const resultConainer = app.findByProps({
      className: "empty-div result-container",
    });
    expect(resultConainer).toBeTruthy();
  });

  it("renders empty div if nothing is specified", () => {
    const app = TestRenderer.create(<App />).root;
    const input = app.findByProps({ className: "natural-integer-input" });
    act(() => {
      input.props.onChange({ target: { value: "" } });
    });
    const button = app.findByProps({ className: "calculate-fibonacci-button" });
    act(() => {
      button.props.onClick();
    });
    const resultConainer = app.findByProps({
      className: "empty-div result-container",
    });
    expect(resultConainer).toBeTruthy();
  });
});
