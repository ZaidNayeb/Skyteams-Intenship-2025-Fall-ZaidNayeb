import { describe, it, expect } from "vitest";
import isBalanced from "../src/Question_20";

describe("Question 20 Tests - Balanced Parentheses", () => {

    it("Should return true for balanced curly, square, and round brackets", () => {
        expect(isBalanced("{[()]}")).toBe(true);
    });

    it("Should return true for balanced mixed brackets", () => {
        expect(isBalanced("{()[]}")).toBe(true);
    });

    it("Should return false for unbalanced brackets", () => {
        expect(isBalanced("{[(])}")).toBe(false);
    });

    it("Should return false for missing closing brackets", () => {
        expect(isBalanced("{[(")).toBe(false);
    });

    it("Should return false for missing opening brackets", () => {
        expect(isBalanced(")]}")).toBe(false);
    });

    it("Should return true for empty string", () => {
        expect(isBalanced("")).toBe(true);
    });

    it("Should return true for only one type of bracket balanced", () => {
        expect(isBalanced("((()))")).toBe(true);
    });

    it("Should return false for single unbalanced bracket", () => {
        expect(isBalanced("(")).toBe(false);
    });

    it("Should return true for long balanced sequence", () => {
        expect(isBalanced("{[()[]{}()]}")).toBe(true);
    });

});
