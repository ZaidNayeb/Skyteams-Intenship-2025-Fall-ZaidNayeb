# Week 03 JavaScript Project

A complete JavaScript project with comprehensive testing setup using Jest.

## Project Structure

```
week_03/
├── src/                    # Source code
│   ├── index.js           # Main entry point
│   ├── math.js            # Math utility functions
│   ├── stringUtils.js     # String manipulation functions
│   └── utils.js           # General utility functions
├── tests/                  # Test files
│   ├── math.test.js       # Tests for math functions
│   ├── stringUtils.test.js # Tests for string utilities
│   └── utils.test.js      # Tests for utility functions
├── package.json           # Project dependencies and scripts
├── jest.config.js         # Jest configuration
├── .gitignore            # Git ignore file
└── README.md             # This file
```

## Installation

1. Install dependencies:
```bash
npm install
```

## Available Scripts

- `npm test` - Run all tests
- `npm run test:watch` - Run tests in watch mode
- `npm run test:coverage` - Run tests with coverage report
- `npm start` - Run the main application

## Features

### Math Functions (`src/math.js`)
- `add(a, b)` - Add two numbers
- `subtract(a, b)` - Subtract two numbers
- `multiply(a, b)` - Multiply two numbers
- `divide(a, b)` - Divide two numbers (with zero check)
- `power(base, exponent)` - Calculate power
- `factorial(n)` - Calculate factorial
- `isEven(n)` - Check if number is even
- `isPrime(n)` - Check if number is prime

### String Utilities (`src/stringUtils.js`)
- `capitalize(str)` - Capitalize first letter
- `reverseString(str)` - Reverse a string
- `isPalindrome(str)` - Check if string is palindrome
- `countWords(str)` - Count words in string
- `truncate(str, maxLength)` - Truncate string
- `removeWhitespace(str)` - Remove all whitespace
- `toCamelCase(str)` - Convert to camelCase

### General Utilities (`src/utils.js`)
- `formatDate(date)` - Format date to readable string
- `debounce(func, wait)` - Create debounced function
- `deepClone(obj)` - Deep clone an object
- `isEmpty(value)` - Check if value is empty
- `randomInt(min, max)` - Generate random integer

## Testing

All functions are thoroughly tested with Jest. Test files are located in the `tests/` directory.

### Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode (auto-rerun on file changes)
npm run test:watch

# Run tests with coverage report
npm run test:coverage
```

## Example Usage

```javascript
const { add, multiply } = require('./src/math');
const { capitalize, isPalindrome } = require('./src/stringUtils');

console.log(add(5, 3)); // 8
console.log(multiply(4, 6)); // 24
console.log(capitalize('hello world')); // Hello world
console.log(isPalindrome('racecar')); // true
```

## Technologies Used

- **Node.js** - JavaScript runtime
- **Jest** - Testing framework
- **Babel** - JavaScript compiler for ES6+ support

## License

ISC

