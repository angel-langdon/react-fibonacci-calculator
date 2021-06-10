import {
  FibonacciIterativeMemoized,
  FibonacciIterative,
  Fibonacci,
  cleanFibonacciCache,
  fibonacciCache,
  initialCache,
  MAXIMUM_ARRAY_LENGTH_FOR_MEMOIZATION,
} from "./fibonacci";

const biggestNumber = 12;
// key: n | value: Fibonacci(n)
const testCases = {
  0: BigInt(0),
  1: BigInt(1),
  2: BigInt(1),
  3: BigInt(2),
  4: BigInt(3),
  5: BigInt(5),
  6: BigInt(8),
  10: BigInt(55),
  [biggestNumber]: BigInt(144),
};

const itPassesAllFibonacciTestCases = (callback) => {
  for (let naturalInteger in testCases) {
    if (callback(BigInt(naturalInteger)) !== testCases[naturalInteger]) {
      return false;
    }
  }
  return true;
};
describe("fibonacci functions testing", () => {
  it("FibonacciIterative", () => {
    expect(itPassesAllFibonacciTestCases(FibonacciIterative)).toBe(true);
    expect(fibonacciCache.length).toBe(initialCache.length);
  });

  it("FibonacciIterativeMemoized", () => {
    expect(itPassesAllFibonacciTestCases(FibonacciIterativeMemoized)).toBe(
      true
    );
  });

  it("FibonacciIterativeMemoized - memoized version uses the cache", () => {
    cleanFibonacciCache();
    expect(fibonacciCache.length).toBe(initialCache.length);
    expect(itPassesAllFibonacciTestCases(FibonacciIterativeMemoized)).toBe(
      true
    );
    expect(fibonacciCache.length).toBe(biggestNumber + 1);
  });

  it("Cleans the fibonacci cache, setting it to the initial cache", () => {
    expect(itPassesAllFibonacciTestCases(FibonacciIterativeMemoized)).toBe(
      true
    );
    cleanFibonacciCache();
    expect(fibonacciCache.length).toBe(initialCache.length);
  });

  it("Fibonacci", () => {
    expect(itPassesAllFibonacciTestCases(Fibonacci)).toBe(true);
  });

  it("Fibonacci performs memoized calculations until the maximum array size is exceeded", () => {
    cleanFibonacciCache();
    Fibonacci(MAXIMUM_ARRAY_LENGTH_FOR_MEMOIZATION - 1);
    expect(fibonacciCache.length).toBe(MAXIMUM_ARRAY_LENGTH_FOR_MEMOIZATION);
    Fibonacci(MAXIMUM_ARRAY_LENGTH_FOR_MEMOIZATION + 10);
    expect(fibonacciCache.length).toBe(MAXIMUM_ARRAY_LENGTH_FOR_MEMOIZATION);
  });
});
