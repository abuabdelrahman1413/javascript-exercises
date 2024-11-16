const fibonacci = function (n) {
  if (typeof n === "string") {
    n = Number(n);
  }
  if (n === 1 || n === 2) return 1;
  if (n === 0) return 0;
  if (n < 0) return "OOPS";

  let prev = 1;
  let next = 1;
  let fib;
  let i = 3;
  while (i <= n) {
    fib = prev + next;
    prev = next;
    next = fib;
    i++;
  }
  return fib;
};

// Do not edit below this line
module.exports = fibonacci;
