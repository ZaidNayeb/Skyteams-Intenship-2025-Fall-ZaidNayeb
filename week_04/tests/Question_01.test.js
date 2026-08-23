import { describe , test, it, expect } from "vitest";
import secondLargest from "../src/Question_01";

describe("Question 01 Tests", () => {
    it("Should return the second largest number ", () => {//AAA (Arrane, Act, Assert)
        expect(secondLargest([10, 20, 4, 45, 99])).toBe(45);
    })
    it("Should return -Infinity for array with all same elements", () => {
        expect(secondLargest([7, 7, 7])).toBe(-Infinity);
    })
    it("Should return the second largest number with negative numbers", () => {
        expect(secondLargest([-10, -20, -4, -45, -99])).toBe(-10);
    });
    test("Should return the second largest number with mixed positive and negative numbers", () => {
        expect(secondLargest([3, -1, 4, -2, 5])).toBe(4);
    });
    test("Should return -Infinity for single element array", () => {
        expect(secondLargest([42])).toBe(-Infinity);
    });
    it("Should return the second largest number with duplicates", () => {
        expect(secondLargest([1, 3, 3, 2, 2])).toBe(2);
    });
}) 