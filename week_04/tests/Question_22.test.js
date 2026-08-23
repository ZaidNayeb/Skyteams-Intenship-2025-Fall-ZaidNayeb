import { describe, it, expect } from "vitest";
import mergeIntervals from "../src/Question_22";

describe("Question 22 Tests - Merge Overlapping Intervals", () => {

    it("Should merge simple overlapping intervals", () => {
        expect(mergeIntervals([[1, 3], [2, 6], [8, 10]])).toEqual([[1, 6], [8, 10]]);
    });

    it("Should return same intervals when no overlaps exist", () => {
        expect(mergeIntervals([[1, 2], [3, 4], [5, 6]])).toEqual([[1, 2], [3, 4], [5, 6]]);
    });

    it("Should merge all intervals into one", () => {
        expect(mergeIntervals([[1, 4], [2, 5], [3, 6], [4, 7]])).toEqual([[1, 7]]);
    });

    it("Should handle already sorted and non-overlapping intervals", () => {
        expect(mergeIntervals([[0, 1], [2, 3], [4, 5]])).toEqual([[0, 1], [2, 3], [4, 5]]);
    });

    it("Should handle fully nested intervals", () => {
        expect(mergeIntervals([[1, 10], [2, 3], [4, 8], [9, 10]])).toEqual([[1, 10]]);
    });

    it("Should return the same interval when only one interval is present", () => {
        expect(mergeIntervals([[5, 9]])).toEqual([[5, 9]]);
    });

    it("Should merge duplicate intervals correctly", () => {
        expect(mergeIntervals([[2, 4], [2, 4], [2, 4]])).toEqual([[2, 4]]);
    });

    it("Should merge negative and positive intervals", () => {
        expect(mergeIntervals([[-10, -1], [-5, 3], [4, 8]])).toEqual([[-10, 3], [4, 8]]);
    });

    it("Should merge touching intervals (end equals start)", () => {
        expect(mergeIntervals([[1, 5], [5, 10]])).toEqual([[1, 10]]);
    });

    it("Should merge mixed intervals correctly", () => {
        expect(mergeIntervals([[1, 4], [2, 5], [7, 9], [8, 10], [10, 11]])).toEqual([[1, 5], [7, 11]]);
    });

});
