import { describe, it, test, expect } from "vitest";
import intersection from "../src/Question_04";

describe("Question 04 Tests - Intersection of Two Arrays", () => {

    it("Should return [3, 4] for overlapping numbers", () => {
        expect(intersection([1, 2, 3, 4], [3, 4, 5, 6])).toEqual([3, 4]);
    });

    it("Should return an empty array when there is no intersection", () => {
        expect(intersection([1, 2], [3, 4])).toEqual([]);
    });

    it("Should work with repeated values in both arrays", () => {
        expect(intersection([1, 2, 2, 3], [2, 2, 4])).toEqual([2, 2, 2, 2]);
    });

    it("Should work with negative numbers", () => {
        expect(intersection([-1, -2, -3], [-3, 0, 1])).toEqual([-3]);
    });

    it("Should return empty array if one array is empty", () => {
        expect(intersection([], [1, 2, 3])).toEqual([]);
    });

    it("Should return empty array if both arrays are empty", () => {
        expect(intersection([], [])).toEqual([]);
    });

    test("Should work with identical arrays", () => {
        expect(intersection([5, 6, 7], [5, 6, 7])).toEqual([5, 6, 7]);
    });

    test("Should handle large arrays correctly", () => {
        expect(intersection([1, 2, 3, 4, 5], [4, 5, 6, 7, 8])).toEqual([4, 5]);
    });

});
