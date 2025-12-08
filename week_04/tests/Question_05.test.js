import { describe, it, test, expect } from "vitest";
import evenBeforeOdd from "../src/Question_05";

describe("Question 05 Tests - Rearrange Array (Even Before Odd)", () => {

    it("Should move evens before odds in normal array", () => {
        expect(evenBeforeOdd([1, 2, 3, 4, 5, 6])).toEqual([2, 4, 6, 1, 3, 5]);
    });

    it("Should work when array has only even numbers", () => {
        expect(evenBeforeOdd([2, 4, 6])).toEqual([2, 4, 6]);
    });

    it("Should work when array has only odd numbers", () => {
        expect(evenBeforeOdd([1, 3, 5])).toEqual([1, 3, 5]);
    });

    it("Should work with negative numbers", () => {
        expect(evenBeforeOdd([-1, -2, -3, -4])).toEqual([-2, -4, -1, -3]);
    });

    it("Should maintain order among even and odd numbers", () => {
        expect(evenBeforeOdd([4, 1, 2, 3])).toEqual([4, 2, 1, 3]);
    });

    test("Should work with an empty array", () => {
        expect(evenBeforeOdd([])).toEqual([]);
    });

    test("Should work with single element array (even)", () => {
        expect(evenBeforeOdd([2])).toEqual([2]);
    });

    test("Should work with single element array (odd)", () => {
        expect(evenBeforeOdd([5])).toEqual([5]);
    });

});
