const factorialN = require('../src/Question_14');

test('1. ', () => {
  expect(factorialN(5)).toBe(120);
});

test('2. ', () => {
  expect(factorialN(0)).toBe(1);
});

test('3. ', () => {
  expect(factorialN(1)).toBe(1);
});

test('4. ', () => {
  expect(factorialN(3)).toBe(6);
});

test('5. ', () => {
  expect(factorialN(6)).toBe(720);
});

test('6. ', () => {
  expect(factorialN(4)).toBe(24);
});

test('7. ', () => {
  expect(factorialN(2)).toBe(2);
});

test('8. ', () => {
  expect(factorialN(7)).toBe(5040);
});

test('9. ', () => {
  expect(factorialN(8)).toBe(40320);
});
