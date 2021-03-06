const collatz = (n) => {
  if (n === 1) {
    return 0;
  }
  return collatz(n % 2 === 0 ? n / 2 : n * 3 + 1) + 1;
};

export const steps = (n) => {
  if (n < 1) {
    throw new Error('Only positive numbers are allowed');
  }
  return collatz(n);
};
