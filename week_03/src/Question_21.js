// Author : Zaid Nayeb
// Date   : 2025/11/26
/*
21. Password Strength Checker 
Description: A strong password must: 
•	Be at least 8 characters long. 
•	Contain at least one uppercase letter, one lowercase letter, and one number. 
Example: 
Input: MyPass123 
Output: Strong 

Input: pass 
Output: Weak 

*/
console.log(passwordChecker("MyPass123"))

function passwordChecker(password) {
    const uppercase = [];
    const lowercase = [];
    const digits = [];

    for (let i = 65; i <= 90; i++) {
        uppercase.push(String.fromCharCode(i));
        lowercase.push(String.fromCharCode(i + 32));
    }

    for (let i = 0; i <= 9; i++) {
        digits.push(i.toString());
    }

    let hasUpper = false;
    let hasLower = false;
    let hasDigit = false;

    for (let i = 0; i < password.length; i++) {
        const char = password.charAt(i);
        
        if (uppercase.includes(char)) {
            hasUpper = true;
        }
        if (lowercase.includes(char)) {
            hasLower = true;
        }
        if (digits.includes(char)) {
            hasDigit = true;
        }
    }

    if (password.length >= 8 && hasUpper && hasLower && hasDigit) {
        return "Strong";
    } else {
        return "Weak";
    }
}

module.exports = passwordChecker;