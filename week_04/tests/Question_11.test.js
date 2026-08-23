import { describe, it, expect } from "vitest";
import rotateArray from "../src/Question_11";

describe("Question 11 Tests - String Rotation Check", () => {
    it("1", () => {
        expect(rotateArray("waterbottle", "erbottlewat")).toBe(true);
    });

    it("2", () => {
        expect(rotateArray("abcde", "deabc")).toBe(true);
    });

    it("3", () => {
        expect(rotateArray("abcde", "cdeab")).toBe(true);
    });

    it("4", () => {
        expect(rotateArray("abcde", "abcde")).toBe(true); // same string
    });

    it("5", () => {
        expect(rotateArray("abcde", "edcba")).toBe(false); // reversed
    });

    it("6", () => {
        expect(rotateArray("aaa", "aaa")).toBe(true); // repeated char
    });

    it("7", () => {
        expect(rotateArray("rotation", "tationro")).toBe(true);
    });

    it("8", () => {
        expect(rotateArray("rotation", "tionrota")).toBe(true);
    });
});
