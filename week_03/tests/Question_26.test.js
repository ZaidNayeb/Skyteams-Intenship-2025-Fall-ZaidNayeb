const toBinary = require('../src/Question_26');

test('1. ', () => {
  expect(toBinary(0)).toEqual([0]);
});

test('2. ', () => {
  expect(toBinary(1)).toEqual([1]);
});

test('3. ', () => {
  expect(toBinary(2)).toEqual([1, 0]);
});

test('4. ', () => {
  expect(toBinary(5)).toEqual([1, 0, 1]);
});

test('5. ', () => {
  expect(toBinary(10)).toEqual([1, 0, 1, 0]);
});

test('6. ', () => {
  expect(toBinary(156)).toEqual([1, 0, 0, 1, 1, 1, 0, 0]);
});

test('7. ', () => {
  expect(toBinary(255)).toEqual([1, 1, 1, 1, 1, 1, 1, 1]);
});

test('8. ', () => {
  expect(toBinary(1024)).toEqual([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
});

test('9. ', () => {
  expect(toBinary(7)).toEqual([1, 1, 1]);
});

test('10. ', () => {
  expect(toBinary(123)).toEqual([1, 1, 1, 1, 0, 1, 1]);
});
