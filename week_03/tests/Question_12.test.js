const isPalindrome = require('../src/Question_12');

test('1. ', () => {
    expect(isPalindrome(121)).toBe('Palindrome');
});

test('2. ', () => {
    expect(isPalindrome(123)).toBe('Not Palindrome');
});

test('3. ', () => {
    expect(isPalindrome(0)).toBe('Palindrome');
});

test('4. ', () => {
    expect(isPalindrome(11)).toBe('Palindrome');
});

test('5. ', () => {
    expect(isPalindrome(1221)).toBe('Palindrome');
});

test('6. ', () => {
    expect(isPalindrome(12321)).toBe('Palindrome');
});

test('7. ', () => {
    expect(isPalindrome(12345)).toBe('Not Palindrome');
});

test('8. ', () => {
    expect(isPalindrome(1)).toBe('Palindrome');
});

test('9. ', () => {
    expect(isPalindrome(10)).toBe('Not Palindrome');
});

test('10. ', () => {
    expect(isPalindrome(1001)).toBe('Palindrome');
});
