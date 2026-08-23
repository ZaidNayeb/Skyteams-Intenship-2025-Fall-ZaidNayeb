import { describe, it, expect } from "vitest";
import topKFrequent from "../src/Question_23";

describe("Question 23 Tests - Top K Frequent Elements", () => {

    it("Should return [1, 2] for [1,1,1,2,2,3] with k=2", () => {
        expect(topKFrequent([1,1,1,2,2,3], 2)).toEqual([1, 2]);
    });

    it("Should return [1] for [1,1,1,2,2,3] with k=1", () => {
        expect(topKFrequent([1,1,1,2,2,3], 1)).toEqual([1]);
    });

    it("Should return [2, 3] for [3,3,3,2,2,1] with k=2", () => {
        expect(topKFrequent([3,3,3,2,2,1], 2)).toEqual([3, 2]);
    });

    it("Should handle array with all same elements", () => {
        expect(topKFrequent([5,5,5,5], 1)).toEqual([5]);
    });

    it("Should return all elements if k equals array length", () => {
        expect(topKFrequent([1,2,3], 3).sort()).toEqual([1,2,3]);
    });

    it("Should handle negative numbers", () => {
        expect(topKFrequent([-1,-1,-2,-2,-2,-3], 2)).toEqual([-2, -1]);
    });

    it("Should handle single element array", () => {
        expect(topKFrequent([42], 1)).toEqual([42]);
    });

    it("Should return empty array if k=0", () => {
        expect(topKFrequent([1,2,3], 0)).toEqual([]);
    });

    it("Should return correct result when multiple numbers have same frequency", () => {
        expect(topKFrequent([1,2,2,3,3], 2)).toEqual([2,3]);
    });

});
