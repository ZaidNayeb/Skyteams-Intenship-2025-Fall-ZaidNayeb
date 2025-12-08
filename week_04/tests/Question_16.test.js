import { describe, it, expect } from "vitest";
import matrixMultiplication from "../src/Question_16";

describe("Question 16 Tests - Matrix Multiplication", () => {
    it("1: 2x2 matrices", () => {
        expect(matrixMultiplication([[1,2],[3,4]], [[5,6],[7,8]])).toEqual([[19,22],[43,50]]);
    });

    it("2: 3x2 and 2x3 matrices", () => {
        expect(matrixMultiplication([[1,2],[3,4],[5,6]], [[7,8,9],[10,11,12]])).toEqual([[27,30,33],[61,68,75],[95,106,117]]);
    });

    it("3: Identity matrix multiplication", () => {
        expect(matrixMultiplication([[1,0],[0,1]], [[9,8],[7,6]])).toEqual([[9,8],[7,6]]);
    });

    it("4: 1x3 and 3x1 matrices", () => {
        expect(matrixMultiplication([[1,2,3]], [[4],[5],[6]])).toEqual([[32]]);
    });

    it("5: Single element matrices", () => {
        expect(matrixMultiplication([[5]], [[2]])).toEqual([[10]]);
    });

    it("6: Incompatible matrices", () => {
        expect(() => matrixMultiplication([[1,2]], [[3,4],[5,6],[7,8]])).toThrow("Incompatible matrices for multiplication");
    });

    it("7: 3x3 zero matrix multiplication", () => {
        expect(matrixMultiplication([[0,0,0],[0,0,0],[0,0,0]], [[1,2,3],[4,5,6],[7,8,9]])).toEqual([[0,0,0],[0,0,0],[0,0,0]]);
    });

    it("8: 2x3 and 3x2 matrices", () => {
        expect(matrixMultiplication([[1,2,3],[4,5,6]], [[7,8],[9,10],[11,12]])).toEqual([[58,64],[139,154]]);
    });
});
