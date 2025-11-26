test('1.', () => {
  expect(smallestElement([4, 7, 1, 9, 2])).toBe(1);
});

test('2.', () => {
  expect(smallestElement([10, 10, 10])).toBe(10);
});

test('3.', () => {
  expect(smallestElement([5])).toBe(5);
});

test('4.', () => {
  expect(smallestElement([-3, -1, -7, 0])).toBe(-7);
});

test('5.', () => {
  expect(smallestElement([100, 50, 75, 25])).toBe(25);
});
