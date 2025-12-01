const passwordChecker = require('../src/Question_21');

test('1. ', () => {
  expect(passwordChecker("MyPass123")).toBe("Strong");
});

test('2. ', () => {
  expect(passwordChecker("pass")).toBe("Weak");
});

test('3. ', () => {
  expect(passwordChecker("Password")).toBe("Weak");
});

test('4. ', () => {
  expect(passwordChecker("12345678")).toBe("Weak");
});

test('5. ', () => {
  expect(passwordChecker("Pass123")).toBe("Weak");
});

test('6. ', () => {
  expect(passwordChecker("StrongPass1")).toBe("Strong");
});

test('7. ', () => {
  expect(passwordChecker("weakpass123")).toBe("Weak");
});

test('8. ', () => {
  expect(passwordChecker("UPPERlower1")).toBe("Strong");
});

test('9. ', () => {
  expect(passwordChecker("Short1")).toBe("Weak");
});

test('10. ', () => {
  expect(passwordChecker("MixedCase123")).toBe("Strong");
});
