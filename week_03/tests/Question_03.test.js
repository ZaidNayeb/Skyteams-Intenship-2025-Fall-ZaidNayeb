
const sumOfDigits = require('../src/Question_03');

test('1. ', () => { expect(sumOfDigits(12345)).toBe(15); });
test('2. ', () => { expect(sumOfDigits(0)).toBe(0); });
test('3. ', () => { expect(sumOfDigits(9)).toBe(9); });
test('4. ', () => { expect(sumOfDigits(1111)).toBe(4); });
test('5. ', () => { expect(sumOfDigits(9876543210)).toBe(45); });
test('6. ', () => { expect(sumOfDigits(1000)).toBe(1); });
test('7. ', () => { expect(sumOfDigits(50505)).toBe(15); });
test('8. ', () => { expect(sumOfDigits(2468)).toBe(20); });
