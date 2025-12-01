const equalArray = require('../src/Question_29');

test('1. ', () => {
  expect(equalArray([1, 2, 3], [1, 2, 3])).toBe(true);
});

test('2. ', () => {
  expect(equalArray([1, 2, 4], [1, 2, 3])).toBe(false);
});

test('3. ', () => {
  expect(equalArray([], [])).toBe(true);
});

test('4. ', () => {
  expect(equalArray([1], [1])).toBe(true);
});

test('5. ', () => {
  expect(equalArray([1], [2])).toBe(false);
});

test('6. ', () => {
  expect(equalArray([1, 2, 3], [1, 2])).toBe(false);
});

test('7. ', () => {
  expect(equalArray([1, 2], [1, 2, 3])).toBe(false);
});

test('8. ', () => {
  expect(equalArray([5, 6, 7], [5, 6, 7])).toBe(true);
});

test('9. ', () => {
  expect(equalArray([0, 0, 0], [0, 0, 0])).toBe(true);
});

test('10. ', () => {
  expect(equalArray([1, 2, 3], [3, 2, 1])).toBe(false);
});
