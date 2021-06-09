export function stringIsNaturalNumber(string) {
  // regex to match positive integer numbers
  //  start - 0 or 1-9 - [0,9] {0,} - end
  return /^(0|[1-9]\d*)$/.test(string);
}

// Fibonacci(0) == 0
// Fibonacci(1) == 1
// here we will store the Fibonacci results to
// prevent already made calculations
let fibonacciCache = [0, 1, 1];

export function FibonacciRecursive(naturalNumber) {
  // memoized version of Fibonacci sucesion
  // for big numbers fails because stack size is exceeded
  if (fibonacciCache[naturalNumber]) {
    return fibonacciCache[naturalNumber];
  }
  fibonacciCache[naturalNumber] =
    FibonacciRecursive(naturalNumber - 1) +
    FibonacciRecursive(naturalNumber - 2);
  return fibonacciCache[naturalNumber];
}

export function Fibonacci(naturalNumber) {
  // iterative version of Fibonacci with memoization
  if (fibonacciCache[naturalNumber]) {
    return fibonacciCache[naturalNumber];
  }
  const N = fibonacciCache.length;
  for (let i = N; i <= naturalNumber; i++) {
    fibonacciCache[i] = fibonacciCache[i - 1] + fibonacciCache[i - 2];
  }
  return fibonacciCache[naturalNumber];
}
