
const reverseNumber = require('../src/Question_02');

test('1. ', () => { expect(reverseNumber(12345)).toBe(54321); });
test('2. ', () => { expect(reverseNumber(0)).toBe(0); });
test('3. ', () => { expect(reverseNumber(1000)).toBe(1); });
test('4. ', () => { expect(reverseNumber(-987)).toBe(-789); });
test('5. ', () => { expect(reverseNumber(-1200)).toBe(-21); });
test('6. ', () => { expect(reverseNumber(5)).toBe(5); });
test('7. ', () => { expect(reverseNumber(-1)).toBe(-1); });
test('8. ', () => { expect(reverseNumber(102030)).toBe(30201); });
