import { describe, test, it, expect } from "vitest";
import mergeSorted from "../src/Question_02";

describe("Question 02 Tests", () => {
    test("1, should return merge two sorted arrays", () => {
        expect(mergeSorted([1, 3, 5], [2, 4, 6])).toEqual([1, 2, 3, 4, 5, 6]);
    });
    it("2, should return merge two sorted arrays with negative numbers", () => {
        expect(mergeSorted([-3, -1, 2], [-2, 0, 1])).toEqual([-3, -2, -1, 0, 1, 2]);
    });
})