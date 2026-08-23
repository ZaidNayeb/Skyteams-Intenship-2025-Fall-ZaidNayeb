const fibonacci = require('../src/Question_16');

test('1. ', () => {
  expect(fibonacci(7)).toEqual([0, 1, 1, 2, 3, 5, 8]);
});

test('2. ', () => {
  expect(fibonacci(0)).toEqual([0, 1]);
});

test('3. ', () => {
  expect(fibonacci(1)).toEqual([0, 1, 1, 2]);
});

test('4. ', () => {
  expect(fibonacci(10)).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
});

test('5. ', () => {
  expect(fibonacci(15)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21]);
});

test('6. ', () => {
  expect(fibonacci(2)).toEqual([0, 1, 1, 2, 3]);
});

test('7. ', () => {
  expect(fibonacci(5)).toEqual([0, 1, 1, 2, 3, 5, 8]);
});

test('8. ', () => {
  expect(fibonacci(20)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21]);
});

