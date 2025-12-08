import { describe, it, expect } from "vitest";
import sentenceAbbreviation from "../src/Question_17";

describe("Question 17 Tests - Sentence Abbreviation", () => {
    it("1: Standard sentence", () => {
        expect(sentenceAbbreviation("I am learning JavaScript")).toBe("I a l J");
    });

    it("2: Single word", () => {
        expect(sentenceAbbreviation("Hello")).toBe("H");
    });

    it("3: Two words", () => {
        expect(sentenceAbbreviation("Open AI")).toBe("O A");
    });

    it("4: Sentence with multiple spaces", () => {
        expect(sentenceAbbreviation("I   love   coding")).toBe("I l c");
    });

    it("5: Sentence with punctuation", () => {
        expect(sentenceAbbreviation("Hello, world!")).toBe("H w");
    });

    it("6: Empty string", () => {
        expect(sentenceAbbreviation("")).toBe("");
    });

    it("7: Sentence with numbers", () => {
        expect(sentenceAbbreviation("I have 2 cats")).toBe("I h 2 c");
    });

    it("8: Sentence with mixed case", () => {
        expect(sentenceAbbreviation("JavaScript Is Fun")).toBe("J I F");
    });
});
