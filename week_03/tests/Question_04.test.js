
const factorsOf = require('../src/Question_04');

test('1. ', () => { expect(factorsOf(12)).toEqual([1, 2, 3, 4, 6, 12]); });
test('2. ', () => { expect(factorsOf(13)).toEqual([1, 13]); });
test('3. ', () => { expect(factorsOf(1)).toEqual([1]); });
test('4. ', () => { expect(factorsOf(20)).toEqual([1, 2, 4, 5, 10, 20]); });
test('5. ', () => { expect(factorsOf(21)).toEqual([1, 3, 7, 21]); });
test('6. ', () => { expect(factorsOf(100)).toEqual([1, 2, 4, 5, 10, 20, 25, 50, 100]); });
test('7. ', () => { expect(factorsOf(6)).toEqual([1, 2, 3, 6]); });
test('8. ', () => { expect(factorsOf(15)).toEqual([1, 3, 5, 15]); });
