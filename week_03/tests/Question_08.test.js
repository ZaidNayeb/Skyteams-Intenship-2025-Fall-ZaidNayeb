
const containsElement = require('../src/Question_08');


test('1. ', () => {
  expect(containsElement([3, 6, 9, 12], 6)).toBe("Found");
});

test('2. ', () => {
  expect(containsElement([3, 6, 9, 12], 5)).toBe("Not Found");
});

test('3. ', () => {
  expect(containsElement([], 1)).toBe("Not Found");
});

test('4. ', () => {
  expect(containsElement([1, 2, 3, 4, 5], 1)).toBe("Found");
});

test('5. ', () => {
  expect(containsElement([10, 20, 30], 30)).toBe("Found");
});

test('6. ', () => {
  expect(containsElement([10, 20, 30], 40)).toBe("Not Found");
});

test('7. ', () => {
  expect(containsElement(["a", "b", "c"], "b")).toBe("Found");
});

test('8. ', () => {
  expect(containsElement(["x", "y"], "z")).toBe("Not Found");
});

test('9. ', () => {
  expect(containsElement([true, false], false)).toBe("Found");
});

test('10. ', () => {
  expect(containsElement([null, undefined], undefined)).toBe("Found");
});

