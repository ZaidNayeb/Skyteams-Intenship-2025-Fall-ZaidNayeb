
const largestElement = require('../src/Question_05');

test('1. ', () => { expect(largestElement([2, 8, 5, 3, 9])).toBe(9); });
test('2. ', () => { expect(largestElement([1])).toBe(1); });
test('3. ', () => { expect(largestElement([-5, -2, -9, -1])).toBe(-1); });
test('4. ', () => { expect(largestElement([10, 10, 10])).toBe(10); });
test('5. ', () => { expect(largestElement([100, 50, 75, 25])).toBe(100); });
test('6. ', () => { expect(largestElement([-100, -50, -200])).toBe(-50); });
test('7. ', () => { expect(largestElement([3, "7", 2])).toBe("7"); });
test('8. ', () => { expect(largestElement([0, -1, -2, -3])).toBe(0); });
