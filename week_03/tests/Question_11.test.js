
const { isPrime, primeNumbers } = require('../src/Question_11');

test('1. ', () => {
    expect(primeNumbers(10)).toEqual([2, 3, 5, 7]);
});

test('2. ', () => {
    expect(primeNumbers(0)).toEqual([]);
});

test('3. ', () => {
    expect(primeNumbers(1)).toEqual([]);
});

test('4. ', () => {
    expect(primeNumbers(2)).toEqual([2]);
});

test('5. ', () => {
    expect(primeNumbers(20)).toEqual([2, 3, 5, 7, 11, 13, 17, 19]);
});

test('6. ', () => {
    expect(isPrime(2)).toBe(true);
});

test('7. ', () => {
    expect(isPrime(9)).toBe(false);
});

test('8. ', () => {
    expect(isPrime(17)).toBe(true);
});

test('9. ', () => {
    expect(isPrime(1)).toBe(false);
});

test('10. ', () => {
    expect(primeNumbers(1)).toEqual([]);
});

