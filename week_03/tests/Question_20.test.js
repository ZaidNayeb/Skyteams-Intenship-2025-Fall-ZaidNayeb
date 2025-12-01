const BMI = require('../src/Question_20');

test('1. ', () => {
  expect(BMI(50, 1.75)).toBe('BMI = 16.33 (Under Weight)');
});

test('2. ', () => {
  expect(BMI(70, 1.75)).toBe('BMI = 22.86 (Normal Weight)');
});

test('3. ', () => {
  expect(BMI(80, 1.75)).toBe('BMI = 26.12 (Over Weight)');
});

test('4. ', () => {
  expect(BMI(95, 1.75)).toBe('BMI = 31.02 (Obese)');
});

test('5. ', () => {
  expect(BMI(60, 160)).toBe('BMI = 23.44 (Normal Weight)');
});

test('6. ', () => {
  expect(BMI(45, 1.60)).toBe('BMI = 17.58 (Under Weight)');
});

test('7. ', () => {
  expect(BMI(85, 1.70)).toBe('BMI = 29.41 (Over Weight)');
});

test('8. ', () => {
  expect(BMI(110, 1.80)).toBe('BMI = 33.95 (Obese)');
});

test('9. ', () => {
  expect(BMI(72, 1.75)).toBe('BMI = 23.51 (Normal Weight)');
});
