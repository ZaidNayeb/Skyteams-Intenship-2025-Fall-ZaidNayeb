# Week 05 Assignments

This project contains the assignments for Week 05 of the SkyTeams Internship program.

## Project Structure

```
Week_05/
├── package.json                    # Node.js configuration file
├── README.md                       # This file
├── .gitignore                      # Git ignore file
├── vitest.config.js                # Vitest test configuration
└── src/
    ├── question01/
    │   └── question01.js
    ├── question02/
    │   └── question02.js
    └── ... (more questions)
└── test/
    ├── question01/
    │   └── question01.test.js
    ├── question02/
    │   └── question02.test.js
    └── ... (more test files)
```

## Requirements

- Node.js 18 or higher
- npm or yarn package manager

## Installation

To install dependencies:
```bash
npm install
```

## Running Tests

To run all tests in watch mode:
```bash
npm test
```

To run all tests once:
```bash
npm run test:run
```

To run tests with coverage:
```bash
npm run test:coverage
```

## Adding New Questions

1. Create a new directory `questionXX` under `src/`
2. Create your solution file `questionXX.js` in that directory
3. Export your solution function/class from the file
4. Create a corresponding test file `questionXX.test.js` under `test/questionXX/`
5. Write comprehensive tests for your solution

## Notes

- Each question should be in its own directory
- Each question must have corresponding test files
- Follow JavaScript naming conventions
- Write clear, readable code with appropriate comments
- Use ES6+ features (modules, arrow functions, etc.)

