const countOccurrences = require('../src/Question_09');

test('1. ', () => {
  expect(countOccurrences([2, 3, 2, 5, 2], 2)).toBe(3);
});

test('2. ', () => {
  expect(countOccurrences([1, 1, 1, 1, 1], 1)).toBe(5);
});

test('3. ', () => {
  expect(countOccurrences([1, 2, 3, 4, 5], 6)).toBe(0);
});

test('4. ', () => {
  expect(countOccurrences([], 1)).toBe(0);
});

test('5. ', () => {
  expect(countOccurrences(['a', 'b', 'a', 'c'], 'a')).toBe(2);
});

test('6. ', () => {
  expect(countOccurrences([true, false, true, true], true)).toBe(3);
});

test('7. ', () => {
  expect(countOccurrences([null, undefined, null], null)).toBe(2);
});

test('8. ', () => {
  expect(countOccurrences([10, 20, 30, 10, 10], 10)).toBe(3);
});

test('9. ', () => {
  expect(countOccurrences([5, 5, 5, 5], 0)).toBe(0);
});
