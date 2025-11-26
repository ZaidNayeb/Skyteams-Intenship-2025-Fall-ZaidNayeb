test('1.', () => {
  expect(containsElement([3, 6, 9, 12], 6)).toBe("Found");
});

test('2.', () => {
  expect(containsElement([3, 6, 9, 12], 5)).toBe("Not Found");
});

test('3.', () => {
  expect(containsElement([], 1)).toBe("Not Found");
});

test('4.', () => {
  expect(containsElement([1, 2, 3, 4, 5], 1)).toBe("Found");
});

test('5.', () => {
  expect(containsElement([10, 20, 30], 30)).toBe("Found");
});
