
const { countVowels } = require('../src/Question_01');

test('1. ', () => {
    expect(countVowels('')).toBe(0);
});

test('2. ', () => {
    expect(countVowels('hello')).toBe(2);
});

test('3. ', () => {
    expect(countVowels('aeiouy')).toBe(6);
});

test('4. ', () => {
    expect(countVowels('HeLLo')).toBe(2);
});

test('5. ', () => {
    expect(countVowels('rhythm')).toBe(1);
});

test('6. ', () => {
    expect(countVowels('The quick brown fox')).toBe(5);
});

test('7. ', () => {
    expect(countVowels('H3ll0 W0rld!')).toBe(0);
});

test('8. ', () => {
    expect(countVowels('Jest is GREAT for testing JS functions!')).toBe(10);
});
