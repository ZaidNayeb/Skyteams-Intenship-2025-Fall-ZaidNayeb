import { describe, it, test, expect } from "vitest";
import  binarySearch  from "../src/Question_06";

describe("Question 06 Tests - Binary Search Algorithm", () => {

    it("Should find a target in the middle of the array", () => {
        expect(binarySearch([1, 3, 5, 7, 9], 7, 0, 4)).toBe(3);
    });

    it("Should find a target at the start of the array", () => {
        expect(binarySearch([1, 3, 5, 7, 9], 1, 0, 4)).toBe(0);
    });

    it("Should find a target at the end of the array", () => {
        expect(binarySearch([1, 3, 5, 7, 9], 9, 0, 4)).toBe(4);
    });

    it("Should return false if target is not in the array", () => {
        expect(binarySearch([1, 3, 5, 7, 9], 2, 0, 4)).toBe(false);
    });

    it("Should work with negative numbers", () => {
        expect(binarySearch([-10, -5, 0, 5, 10], -5, 0, 4)).toBe(1);
    });

    test("Should work with single-element array (found)", () => {
        expect(binarySearch([42], 42, 0, 0)).toBe(0);
    });

    test("Should work with single-element array (not found)", () => {
        expect(binarySearch([42], 7, 0, 0)).toBe(false);
    });

    test("Should return false for empty array", () => {
        expect(binarySearch([], 5, 0, -1)).toBe(false);
    });

});
