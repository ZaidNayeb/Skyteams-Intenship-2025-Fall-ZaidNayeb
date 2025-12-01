const factorial = require('../src/Question_23');

test('1. ', () => {
  expect(factorial(1)).toBe(1);
});

test('2. ', () => {
  expect(factorial(2)).toBe(2);
});

test('3. ', () => {
  expect(factorial(3)).toBe(6);
});

test('4. ', () => {
  expect(factorial(4)).toBe(24);
});

test('5. ', () => {
  expect(factorial(5)).toBe(120);
});

test('6. ', () => {
  expect(factorial(6)).toBe(720);
});

test('7. ', () => {
  expect(factorial(7)).toBe(5040);
});

test('8. ', () => {
  expect(factorial(10)).toBe(3628800);
});

test('9. ', () => {
  expect(factorial(12)).toBe(479001600);
});

test('10. ', () => {
  expect(factorial(0)).toBeUndefined(); // because your function doesn’t handle 0
});
