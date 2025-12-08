import { describe, it, test, expect } from "vitest";
import rotateArray from "../src/Question_03";

describe("Question 03 Tests - Rotate Array K Times to the Right", () => {

    it("Should rotate array by 2 steps", () => {
        expect(rotateArray([1, 2, 3, 4, 5], 2)).toEqual([4, 5, 1, 2, 3]);
    });

    it("Should rotate array by 0 steps (no change)", () => {
        expect(rotateArray([1, 2, 3], 0)).toEqual([1, 2, 3]);
    });

    it("Should rotate array by array.length steps (same array)", () => {
        expect(rotateArray([10, 20, 30], 3)).toEqual([10, 20, 30]);
    });

    it("Should rotate array by more than its length", () => {
        expect(rotateArray([1, 2, 3], 5)).toEqual([2, 3, 1]);  // 5 % 3 = 2
    });

    it("Should work with negative numbers", () => {
        expect(rotateArray([-1, -2, -3, -4], 1)).toEqual([-4, -1, -2, -3]);
    });

    it("Should work with duplicated elements", () => {
        expect(rotateArray([1, 1, 2, 2], 2)).toEqual([2, 2, 1, 1]);
    });

    test("Should return same array for single-element array", () => {
        expect(rotateArray([99], 4)).toEqual([99]);
    });

    test("Should correctly rotate larger arrays", () => {
        expect(rotateArray([1, 2, 3, 4, 5, 6], 3)).toEqual([4, 5, 6, 1, 2, 3]);
    });

});
