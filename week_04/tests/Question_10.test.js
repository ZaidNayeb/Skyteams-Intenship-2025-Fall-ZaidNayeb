import { describe, it, expect } from "vitest";
import uniqueChars from "../src/Question_10";

describe("Question 10 Tests - Check Unique Characters", () => {
    it("1", () => {
        expect(uniqueChars("abc")).toBe(true);
    });

    it("2", () => {
        expect(uniqueChars("hello")).toBe(false);
    });

    it("3", () => {
        expect(uniqueChars("")).toBe(true);
    });

    it("4", () => {
        expect(uniqueChars("a")).toBe(true);
    });

    it("5", () => {
        expect(uniqueChars("aA")).toBe(true); // case-sensitive
    });

    it("6", () => {
        expect(uniqueChars("aa")).toBe(false);
    });

    it("7", () => {
        expect(uniqueChars("abcdefgxyz")).toBe(true);
    });

    it("8", () => {
        expect(uniqueChars("abcdea")).toBe(false);
    });
});
