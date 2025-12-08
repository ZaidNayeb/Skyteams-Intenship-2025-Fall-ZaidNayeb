import { describe, it, expect } from "vitest";
import charFrequency from "../src/Question_12";

describe("Question 12 Tests - Character Frequency Counter", () => {
    it("1", () => {
        expect(charFrequency("banana")).toEqual({ b: 1, a: 3, n: 2 });
    });

    it("2", () => {
        expect(charFrequency("Apple")).toEqual({ a: 1, p: 2, l: 1, e: 1 });
    });

    it("3", () => {
        expect(charFrequency("Mississippi")).toEqual({ m: 1, i: 4, s: 4, p: 2 });
    });

    it("4", () => {
        expect(charFrequency("")).toEqual({});
    });

    it("5", () => {
        expect(charFrequency("   ")).toEqual({});
    });

    it("6", () => {
        expect(charFrequency("a a a b b c")).toEqual({ a: 3, b: 2, c: 1 });
    });

    it("7", () => {
        expect(charFrequency("Hello World")).toEqual({ h:1, e:1, l:3, o:2, w:1, r:1, d:1 });
    });

    it("8", () => {
        expect(charFrequency("123 123")).toEqual({ '1':2, '2':2, '3':2 });
    });
});
