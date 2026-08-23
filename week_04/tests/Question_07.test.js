import { describe, it, expect, vi } from "vitest";
import rockPaperScissor from "../src/Question_07";

describe("Question 07 Tests - Rock, Paper, Scissors", () => {

    it("Should return tie when user and pc choose the same", () => {
        vi.spyOn(Math, 'random').mockReturnValue(0); // rock
        expect(rockPaperScissor("rock")).toBe("tie");
        Math.random.mockRestore();
    });

    it("Should return 'pc wins' when pc beats user", () => {
        vi.spyOn(Math, 'random').mockReturnValue(2/3); // scissors
        expect(rockPaperScissor("paper")).toBe("pc wins");
        Math.random.mockRestore();
    });

    it("Should return 'you win' when user beats pc", () => {
        vi.spyOn(Math, 'random').mockReturnValue(0); // rock
        expect(rockPaperScissor("scissors")).toBe("you win");
        Math.random.mockRestore();
    });

    it("Should work with uppercase input", () => {
        vi.spyOn(Math, 'random').mockReturnValue(1/3); // paper
        expect(rockPaperScissor("PAPER")).toBe("tie");
        Math.random.mockRestore();
    });

    it("Should handle all possible user vs pc combinations", () => {
        const options = ["rock", "paper", "scissors"];
        const results = {
            rock: ["tie", "pc wins", "you win"],
            paper: ["you win", "tie", "pc wins"],
            scissors: ["pc wins", "you win", "tie"]
        };

        options.forEach((user, i) => {
            options.forEach((pc, j) => {
                vi.spyOn(Math, 'random').mockReturnValue(j/3);
                expect(rockPaperScissor(user)).toBe(results[user][j]);
                Math.random.mockRestore();
            });
        });
    });

    it("Should return 'tie' for all same choices", () => {
        vi.spyOn(Math, 'random').mockReturnValue(1/3); // paper
        expect(rockPaperScissor("paper")).toBe("tie");
        Math.random.mockRestore();
    });

});
