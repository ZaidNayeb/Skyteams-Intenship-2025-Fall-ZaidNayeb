const coolatz = require('../src/Question_22');

test('1. ', () => {
  expect(coolatz(6)).toBe("6 -> 3 -> 10 -> 5 -> 16 -> 8 -> 4 -> 2 -> 1 (Steps : 8)");
});

test('2. ', () => {
  expect(coolatz(1)).toBe("1 (Steps : 0)");
});

test('3. ', () => {
  expect(coolatz(7)).toBe("7 -> 22 -> 11 -> 34 -> 17 -> 52 -> 26 -> 13 -> 40 -> 20 -> 10 -> 5 -> 16 -> 8 -> 4 -> 2 -> 1 (Steps : 16)");
});
