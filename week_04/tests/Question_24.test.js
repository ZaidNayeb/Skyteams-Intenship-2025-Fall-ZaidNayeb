import { describe, test, expect } from "vitest";
import {topKthElement} from "../src/Question_24.js";


describe("K-th Largest Element — topKthElement()", () => {

    test("K-th largest from middle", () => {
        expect(topKthElement([2, 56, 245, 73, 13, 6], 3)).toBe(56);
    });

    test("K = 1 should return largest", () => {
        expect(topKthElement([2, 56, 245, 73, 13, 6], 1)).toBe(245);
    });

    test("K = length should return smallest", () => {
        expect(topKthElement([2, 56, 245, 73, 13, 6], 6)).toBe(2);
    });

    test("Handles duplicates correctly", () => {
        expect(topKthElement([5, 5, 4, 4, 3], 2)).toBe(5);
    });

    test("Small array size 2", () => {
        expect(topKthElement([10, 20], 2)).toBe(10);
    });

    test("Already sorted descending", () => {
        expect(topKthElement([100, 50, 30, 20], 3)).toBe(30);
    });

    test("Already sorted ascending", () => {
        expect(topKthElement([5, 10, 15, 20], 1)).toBe(20);
    });

    test("K > array length (should return undefined)", () => {
        expect(topKthElement([1, 2, 3], 5)).toBe(undefined);
    });

    test("K = 0 (invalid) should return undefined", () => {
        expect(topKthElement([1, 2, 3], 0)).toBe(undefined);
    });

    test("Handles negative numbers", () => {
        expect(topKthElement([-5, -1, -10], 2)).toBe(-5);
    });

});
