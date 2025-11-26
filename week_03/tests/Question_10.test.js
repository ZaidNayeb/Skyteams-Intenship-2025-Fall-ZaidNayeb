test('1.', () => {
  expect(isPrime(17)).toBe("Prime");
});

test('2.', () => {
  expect(isPrime(20)).toBe("Not Prime");
});

test('3.', () => {
  expect(isPrime(2)).toBe("Prime");
});

test('4.', () => {
  expect(isPrime(1)).toBe("Not Prime");
});

test('5.', () => {
  expect(isPrime(0)).toBe("Not Prime");
});

test('6.', () => {
  expect(isPrime(97)).toBe("Prime");
});
