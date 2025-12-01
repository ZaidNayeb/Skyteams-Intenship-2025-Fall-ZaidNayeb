const armstrong = require('../src/Question_15');

test('1. ', () => {
  expect(armstrong(153)).toBe('Armstrong');
});

test('2. ', () => {
  expect(armstrong(370)).toBe('Armstrong');
});

test('3. ', () => {
  expect(armstrong(371)).toBe('Armstrong');
});

test('4. ', () => {
  expect(armstrong(407)).toBe('Armstrong');
});

test('5. ', () => {
  expect(armstrong(123)).toBe('Not Armstrong ');
});

test('6. ', () => {
  expect(armstrong(0)).toBe('Armstrong');
});

test('7. ', () => {
  expect(armstrong(1)).toBe('Armstrong');
});

test('8. ', () => {
  expect(armstrong(9474)).toBe('Armstrong');
});

test('9. ', () => {
  expect(armstrong(9475)).toBe('Not Armstrong ');
});
