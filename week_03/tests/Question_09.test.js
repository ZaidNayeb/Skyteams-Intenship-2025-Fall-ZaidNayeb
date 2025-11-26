test('1.', () => {
  expect(countOccurrences([2, 3, 2, 5, 2], 2)).toBe(3);
});

test('2.', () => {
  expect(countOccurrences([1, 1, 1, 1], 1)).toBe(4);
});

test('3.', () => {
  expect(countOccurrences([1, 2, 3, 4, 5], 6)).toBe(0);
});

test('4.', () => {
  expect(countOccurrences([], 1)).toBe(0);
});

test('5.', () => {
  expect(countOccurrences([5, 5, 5, 2, 5, 3], 5)).toBe(4);
});
