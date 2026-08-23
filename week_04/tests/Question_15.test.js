import { describe, it, expect } from "vitest";
import kadanesAlgorithm from "../src/Question_15";

describe("Question 15 Tests - Kadane's Algorithm", () => {
    it("1: Standard mixed array", () => {
        expect(kadanesAlgorithm([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toBe(6);
    });

    it("2: All negative numbers", () => {
        expect(kadanesAlgorithm([-5, -1, -8, -9])).toBe(-1);
    });

    it("3: All positive numbers", () => {
        expect(kadanesAlgorithm([1, 2, 3, 4, 5])).toBe(15);
    });

    it("4: Single element positive", () => {
        expect(kadanesAlgorithm([7])).toBe(7);
    });

    it("5: Single element negative", () => {
        expect(kadanesAlgorithm([-10])).toBe(-10);
    });

    it("6: Alternating positive and negative", () => {
        expect(kadanesAlgorithm([3, -2, 5, -1])).toBe(6);
    });

    it("7: Zeroes included", () => {
        expect(kadanesAlgorithm([0, -3, 5, 0, -2, 3])).toBe(6);
    });

    it("8: Large array with sum at the start", () => {
        expect(kadanesAlgorithm([10, -2, -1, 2, -5])).toBe(10);
    });
});
