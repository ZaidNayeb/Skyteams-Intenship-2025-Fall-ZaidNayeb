const findMissingNumber = require('../src/Question_30');

test('1. ', () => {
    expect(findMissingNumber([1, 2, 4, 5])).toBe(3);
});

test('2. ', () => {
    expect(findMissingNumber([1, 2, 3, 5])).toBe(4);
});

test('3. ', () => {
    expect(findMissingNumber([2, 3, 4, 5])).toBe(1);
});

test('4. ', () => {
    expect(findMissingNumber([1, 3, 4, 5])).toBe(2);
});

test('5. ', () => {
    expect(findMissingNumber([1, 2, 3, 4])).toBe(5);
});

test('6. ', () => {
    expect(findMissingNumber([1, 2, 3, 4, 6])).toBe(5);
});

test('7. ', () => {
    expect(findMissingNumber([1, 2])).toBe(3);
});

test('8. ', () => {
    expect(findMissingNumber([1])).toBe(2);
});

test('9. ', () => {
    expect(findMissingNumber([])).toBe(1);
});

test('10. ', () => {
    expect(findMissingNumber([1, 2, 3, 4, 5, 6, 8])).toBe(7);
});
