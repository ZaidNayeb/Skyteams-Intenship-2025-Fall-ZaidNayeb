# Week 01 Assignments

This project contains the assignments for Week 01 of the SkyTeams Internship program.

## Project Structure

```
Week_01/
├── pom.xml                          # Maven configuration file
├── README.md                        # This file
└── src/
    ├── main/
    │   └── java/
    │       ├── question01/
    │       │   └── Question01.java
    │       ├── question02/
    │       │   └── Question02.java
    │       └── ... (more questions)
    └── test/
        └── java/
            ├── question01/
            │   └── Question01Test.java
            ├── question02/
            │   └── Question02Test.java
            └── ... (more test files)
```

## Requirements

- Java 17 or higher
- Maven 3.6 or higher

## Building the Project

To compile the project:
```bash
mvn clean compile
```

## Running Tests

To run all tests:
```bash
mvn test
```

To run tests for a specific question:
```bash
mvn test -Dtest=Question01Test
```

## Adding New Questions

1. Create a new package `questionXX` under `src/main/java/`
2. Create your solution class `QuestionXX.java` in that package
3. Create a corresponding test class `QuestionXXTest.java` under `src/test/java/questionXX/`
4. Write comprehensive tests for your solution

## Notes

- Each question should be in its own package
- Each question must have corresponding test classes
- Follow Java naming conventions
- Write clear, readable code with appropriate comments

