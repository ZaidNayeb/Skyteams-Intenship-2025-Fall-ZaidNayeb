import { describe, it, test, expect } from 'vitest';
import longetstPalindromeSubstring from '../src/Question_21';

describe("Question 21 Tests - Longest Palindromic Substring", () => {
    it("Should return 'bab' or 'aba' for input 'babad'", () => {
        const result = longetstPalindromeSubstring("babad");
        expect(result === "bab" || result === "aba").toBe(true);
    });

    it("Should return 'bb' for input 'cbbd'", () => {
        const result = longetstPalindromeSubstring("cbbd");
        expect(result).toBe("bb");
    });
    test("Should return 'a' for input 'a'", () => {
        const result = longetstPalindromeSubstring("a");
        expect(result).toBe("a");
    });

    test("Should return 'aaaa' for input 'aaaa'", () => {
        const result = longetstPalindromeSubstring("aaaa");
        expect(result).toBe("aaaa");
    });
    it("Should return 'racecar' for input 'racecarxyz'", () => {
        const result = longetstPalindromeSubstring("racecarxyz");
        expect(result).toBe("racecar");
    });

    it("Should return 'anana' for input 'banana'", () => {
        const result = longetstPalindromeSubstring("banana");
        expect(result).toBe("anana");
    });
});
