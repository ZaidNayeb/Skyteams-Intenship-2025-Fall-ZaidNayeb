const { reverseNumber } = require('../src/Question_02');

test('reverseNumber: basic positive numbers', () => {
	expect(reverseNumber(1234)).toBe(4321);
	expect(reverseNumber(0)).toBe(0);
});

test('reverseNumber: handles trailing zeros and negatives', () => {
	expect(reverseNumber(1200)).toBe(21); 
	expect(reverseNumber(-9876)).toBe(-6789); 
});

test('reverseNumber: invalid input returns NaN', () => {
	expect(Number.isNaN(reverseNumber('not a number'))).toBe(true);
});
