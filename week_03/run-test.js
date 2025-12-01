// Simple test runner wrapper for Code Runner extension
// Usage: node run-test.js <test-file-path>

const { execSync } = require('child_process');
const path = require('path');

const testFile = process.argv[2];

if (!testFile) {
    console.error('Error: Please provide a test file path');
    console.log('Usage: node run-test.js <test-file-path>');
    process.exit(1);
}

// Extract just the filename from the path
const filename = path.basename(testFile);

try {
    // Run Jest with the specific test file
    execSync(`npm test -- ${filename}`, {
        stdio: 'inherit',
        cwd: process.cwd()
    });
} catch (error) {
    process.exit(error.status || 1);
}

