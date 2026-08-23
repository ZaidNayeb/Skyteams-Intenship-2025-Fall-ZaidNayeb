import { describe, it, expect } from "vitest";
import stringPattern from "../src/Question_13";

describe("Question 13 Tests - String Pattern Matching", () => {
    it("1", () => {
        expect(stringPattern("abba", "dog cat cat dog")).toBe(true);
    });

    it("2", () => {
        expect(stringPattern("abba", "dog cat cat fish")).toBe(false);
    });

    it("3", () => {
        expect(stringPattern("aaaa", "dog dog dog dog")).toBe(true);
    });

    it("4", () => {
        expect(stringPattern("aaaa", "dog dog dog cat")).toBe(false);
    });

    it("5", () => {
        expect(stringPattern("abc", "one two three")).toBe(true);
    });

    it("6", () => {
        expect(stringPattern("abc", "one two two")).toBe(false);
    });

    it("7", () => {
        expect(stringPattern("aaba", "dog dog cat dog")).toBe(true);
    });

    it("8", () => {
        expect(stringPattern("aaba", "dog cat cat dog")).toBe(false);
    });

    it("9", () => {
        expect(stringPattern("xyzx", "apple banana cherry apple")).toBe(true);
    });
});
