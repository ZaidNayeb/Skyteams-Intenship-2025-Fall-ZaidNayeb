

const sumOfDigits = require('./sumOfDigits'); 

test('sum of digits for a simple number', () => {
  expect(sumOfDigits(12345)).toBe(15);
});

test('single digit returns itself', () => {
  expect(sumOfDigits(7)).toBe(7);
});

test('sum of digits for zero', () => {
  expect(sumOfDigits(0)).toBe(0);
});

test('sum of digits for a number with repeated digits', () => {
  expect(sumOfDigits(11111)).toBe(5);
});

test('handles negative numbers by summing digits only', () => {
  expect(sumOfDigits(-123)).toBe(6);
});

test('handles very large numbers', () => {
  expect(sumOfDigits(9876543210)).toBe(45);
});

test('works with numeric strings', () => {
  expect(sumOfDigits("2468")).toBe(20);
});

