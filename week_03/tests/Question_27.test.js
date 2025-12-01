const findUnique = require('../src/Question_27');

test('1. ', () => {
  expect(findUnique([1, 2, 2, 3, 4, 4, 5])).toEqual([1, 2, 3, 4, 5]);
});

test('2. ', () => {
  expect(findUnique([3, 1, 3, 5, 1])).toEqual([3, 1, 5]);
});

test('3. ', () => {
  expect(findUnique([])).toEqual([]);
});

test('4. ', () => {
  expect(findUnique([7, 7, 7, 7])).toEqual([7]);
});

test('5. ', () => {
  expect(findUnique([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
});

test('6. ', () => {
  expect(findUnique([10, 20, 10, 30, 20])).toEqual([10, 20, 30]);
});

test('7. ', () => {
  expect(findUnique([1, 1, 2, 2, 3, 3])).toEqual([1, 2, 3]);
});

test('8. ', () => {
  expect(findUnique([5, 4, 3, 2, 1, 5, 3])).toEqual([5, 4, 3, 2, 1]);
});

test('9. ', () => {
  expect(findUnique([0, 0, 0, 1])).toEqual([0, 1]);
});

test('10. ', () => {
  expect(findUnique([100, 200, 100, 300, 100])).toEqual([100, 200, 300]);
});
