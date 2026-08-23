const isPrime = require('../src/Question_10');

test('1. ', () => {
  expect(isPrime(2)).toBe(true);
});

test('2. ', () => {
  expect(isPrime(3)).toBe(true);
});

test('3. ', () => {
  expect(isPrime(4)).toBe(false);
});

test('4. ', () => {
  expect(isPrime(17)).toBe(true);
});

test('5. ', () => {
  expect(isPrime(20)).toBe(false);
});

test('6. ', () => {
  expect(isPrime(1)).toBe(false);
});

test('7. ', () => {
  expect(isPrime(0)).toBe(false);
});

test('8. ', () => {
  expect(isPrime(-5)).toBe(false);
});

test('9. ', () => {
  expect(isPrime(97)).toBe(true);
});

test('10. ', () => {
  expect(isPrime(100)).toBe(false);
});
