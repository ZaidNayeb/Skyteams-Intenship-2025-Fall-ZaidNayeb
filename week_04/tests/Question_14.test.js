import { describe, it, expect } from "vitest";
import stringPermutations from "../src/Question_14";

describe("Question 14 Tests - String Permutations", () => {
    it("1: Permutations of 'a'", () => {
        expect(stringPermutations("a")).toEqual(["a"]);
    });

    it("2: Permutations of 'ab'", () => {
        const result = stringPermutations("ab").sort();
        expect(result).toEqual(["ab", "ba"].sort());
    });

    it("3: Permutations of 'abc'", () => {
        const result = stringPermutations("abc").sort();
        expect(result).toEqual(["abc", "acb", "bac", "bca", "cab", "cba"].sort());
    });

    it("4: Permutations of empty string", () => {
        expect(stringPermutations("")).toEqual([""]);
    });

    it("5: Permutations of 'abcd' length check", () => {
        const result = stringPermutations("abcd");
        expect(result.length).toBe(24); // 4! = 24
    });

    it("6: Permutations of 'aa'", () => {
        const result = stringPermutations("aa");
        expect(result).toEqual(["aa", "aa"]);
    });

    it("7: Permutations include specific string", () => {
        const result = stringPermutations("abc");
        expect(result).toContain("bca");
    });

    it("8: Permutations of 'xyz' length check", () => {
        const result = stringPermutations("xyz");
        expect(result.length).toBe(6);
    });

    it("9: Permutations of 'ab' include 'ba'", () => {
        const result = stringPermutations("ab");
        expect(result).toContain("ba");
    });
});
