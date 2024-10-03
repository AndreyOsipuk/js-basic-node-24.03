export const fibonacci = (n: number): number => {
  if (n < 2) {
    return n
  }
debugger
  return fibonacci(n - 1) + fibonacci(n - 2)
}