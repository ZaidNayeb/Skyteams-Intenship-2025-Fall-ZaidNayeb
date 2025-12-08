import { describe, it, expect } from "vitest";
import stringCompression from "../src/Question_09";

describe("Question 09 Tests - String Compression", () => {
    it("1", () => {
        expect(stringCompression("aabcccccaaa")).toBe("a2b1c5a3");
    });

    it("2", () => {
        expect(stringCompression("abc")).toBe("a1b1c1");
    });

    it("3", () => {
        expect(stringCompression("aaabb")).toBe("a3b2");
    });

    it("4", () => {
        expect(stringCompression("a")).toBe("a1");
    });

    it("5", () => {
        expect(stringCompression("")).toBe("");
    });

    it("6", () => {
        expect(stringCompression("bbbbb")).toBe("b5");
    });

    it("7", () => {
        expect(stringCompression("aabbaa")).toBe("a2b2a2");
    });

    it("8", () => {
        expect(stringCompression("ccccccccc")).toBe("c9");
    });
});
