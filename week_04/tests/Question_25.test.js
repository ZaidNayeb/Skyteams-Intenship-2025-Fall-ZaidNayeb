// tests/Question_25.test.js
import { describe, it, expect } from 'vitest';
import { setZeroes } from '../src/Question_25';

describe('setZeroes', () => {

    it('should handle a matrix with zeros in the middle', () => {
        const input = [
            [1, 1, 1],
            [0, 1, 1],
            [1, 0, 0]
        ];
        const output = [
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0]
        ];
        expect(setZeroes(input)).toEqual(output);
    });

    it('should handle a matrix with no zeros', () => {
        const input = [
            [1, 2],
            [3, 4]
        ];
        const output = [
            [1, 2],
            [3, 4]
        ];
        expect(setZeroes(input)).toEqual(output);
    });

    it('should handle a matrix with all zeros', () => {
        const input = [
            [0, 0],
            [0, 0]
        ];
        const output = [
            [0, 0],
            [0, 0]
        ];
        expect(setZeroes(input)).toEqual(output);
    });

    it('should handle a single row matrix', () => {
        const input = [[1, 0, 3]];
        const output = [[0, 0, 0]];
        expect(setZeroes(input)).toEqual(output);
    });

    it('should handle a single column matrix', () => {
        const input = [[1], [0], [3]];
        const output = [[0], [0], [0]];
        expect(setZeroes(input)).toEqual(output);
    });

    it('should handle empty matrix', () => {
        const input = [];
        const output = [];
        expect(setZeroes(input)).toEqual(output);
    });

});
