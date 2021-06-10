// We need to enable JavaScript Built-in BigInt
/* global BigInt */

// this number can be tweaked to achieve more efficient calculations
// but should be carefully selected to prevent filling JS maximum heap size
export const MAXIMUM_ARRAY_LENGTH_FOR_MEMOIZATION = 10_000;
// we use BigInt for bigger precision
export const initialCache = [BigInt(0), BigInt(1), BigInt(1)];
// we make a copy to prevent modifying the original cache
export let fibonacciCache = [...initialCache];

export function cleanFibonacciCache() {
  fibonacciCache = [...initialCache];
}

//export function FibonacciRecursive(naturalNumber) {
//  // memoized version of Fibonacci succession
//  // for big numbers fails because stack size is exceeded
//  if (fibonacciCache[naturalNumber]) {
//    return fibonacciCache[naturalNumber];
//  }
//  fibonacciCache[naturalNumber] =
//    FibonacciRecursive(naturalNumber - 1) +
//    FibonacciRecursive(naturalNumber - 2);
//  return fibonacciCache[naturalNumber];
//}

export function FibonacciIterativeMemoized(naturalNumber) {
  // iterative version of Fibonacci with memoization
  if (!(fibonacciCache[naturalNumber] === undefined)) {
    return fibonacciCache[naturalNumber];
  }
  const N = fibonacciCache.length;
  for (let i = N; i <= naturalNumber; i++) {
    const calc = fibonacciCache[i - 1] + fibonacciCache[i - 2];
    fibonacciCache[i] = calc;
  }
  return fibonacciCache[naturalNumber];
}
export function FibonacciIterative(naturalNumber) {
  // iterative version of Fibonacci using already done calculations
  if (!(fibonacciCache[naturalNumber] === undefined)) {
    return fibonacciCache[naturalNumber];
  }
  const N = fibonacciCache.length;
  let lastValue = fibonacciCache[N - 1];
  let penultimateValue = fibonacciCache[N - 2];
  let current;
  for (let i = N; i <= naturalNumber; i++) {
    current = lastValue + penultimateValue;
    penultimateValue = lastValue;
    lastValue = current;
  }

  return current;
}

// wrapper for selecting Fibonacci method
export function Fibonacci(naturalNumber) {
  // in case the natural number is small we can use memoized version
  if (naturalNumber < MAXIMUM_ARRAY_LENGTH_FOR_MEMOIZATION) {
    return FibonacciIterativeMemoized(naturalNumber);
  }
  // if the natural number is big we should use the pure iterative version
  // to prevent filling up the maximum JS Heap Size
  return FibonacciIterative(naturalNumber);
}
