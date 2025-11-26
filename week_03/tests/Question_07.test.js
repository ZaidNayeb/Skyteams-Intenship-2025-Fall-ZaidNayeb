test('1.', () => {
  expect(sumOfArray([1, 2, 3, 4, 5])).toBe(15);
});

test('2.', () => {
  expect(sumOfArray([10, 20, 30])).toBe(60);
});

test('3.', () => {
  expect(sumOfArray([5])).toBe(5);
});

test('4.', () => {
  expect(sumOfArray([-1, -2, -3, -4])).toBe(-10);
});

test('5.', () => {
  expect(sumOfArray([0, 0, 0])).toBe(0);
});

test('6.', () => {
  expect(sumOfArray([100, -50, 25])).toBe(75);
});
