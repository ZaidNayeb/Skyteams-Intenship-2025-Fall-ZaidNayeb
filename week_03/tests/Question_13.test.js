const powerOfN = require('../src/Question_13');

test('1. ', () => {
  expect(powerOfN(2, 5)).toBe(32);
});

test('2. ', () => {
  expect(powerOfN(3, 3)).toBe(27);
});

test('3. ', () => {
  expect(powerOfN(5, 0)).toBe(1);
});

test('4. ', () => {
  expect(powerOfN(1, 10)).toBe(1);
});

test('5. ', () => {
  expect(powerOfN(0, 5)).toBe(0);
});

test('6. ', () => {
  expect(powerOfN(2, 1)).toBe(2);
});

test('7. ', () => {
  expect(powerOfN(10, 2)).toBe(100);
});

test('8. ', () => {
  expect(powerOfN(4, 3)).toBe(64);
});

test('9. ', () => {
  expect(powerOfN(7, 2)).toBe(49);
});

test('10. ', () => {
  expect(powerOfN(2, 10)).toBe(1024);
});
