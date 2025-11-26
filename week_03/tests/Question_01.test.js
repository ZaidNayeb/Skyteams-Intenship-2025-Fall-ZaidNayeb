const { countVowels } = require('../src/Question_01');

test('countVowels: empty string returns 0', () => {
	expect(countVowels('')).toBe(0);
});

test('countVowels: simple words', () => {
	expect(countVowels('hello')).toBe(2);
	expect(countVowels('HeLLo')).toBe(2);
});

test("countVowels: 'rhythm' contains 'y' counted as vowel", () => {
	expect(countVowels('rhythm')).toBe(1);
});

test('countVowels: all vowels', () => {
	expect(countVowels('aeiouAEIOU')).toBe(10);
});

test('countVowels: phrase including y counted as vowel', () => {
	expect(countVowels('SkyTeams Internship')).toBe(6);
});
