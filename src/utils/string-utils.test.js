import { stringIsNaturalNumber } from "./string-utils";

describe("string-utils", () => {
  it("stringIsNaturalNumber - It correctly checks if a string is a natural number", () => {
    expect(stringIsNaturalNumber("hello world")).toBe(false);
    expect(stringIsNaturalNumber("123123hello world")).toBe(false);
    expect(stringIsNaturalNumber("-123123")).toBe(false);
    expect(stringIsNaturalNumber("123  123")).toBe(false);
    expect(stringIsNaturalNumber("123\n")).toBe(false);
    expect(stringIsNaturalNumber("123123")).toBe(true);
    expect(stringIsNaturalNumber("0")).toBe(true);
    expect(stringIsNaturalNumber("0000000000")).toBe(false);
    expect(stringIsNaturalNumber("12311231231321323122323")).toBe(true);
  });
});
