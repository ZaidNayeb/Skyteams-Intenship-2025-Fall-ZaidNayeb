/*
Author  :   Zaid Nayeb
Date    :   2025/12/07

21.	Longest Palindromic Substring 
Input: "babad" → "bab" or "aba" 
*/

console.log(longetstPalindromeSubstring("babad"));

function isPalindrome(string) {
    let original = string;
    string = string.split('');
    let left = 0;
    let right = string.length - 1;

    while (left < right) {
        let temp = string[left];
        string[left] = string[right];
        string[right] = temp;
        left++;
        right--;
    }
    string = string.join('');
    return string == original;
}


function longetstPalindromeSubstring(string) {
    let substrings = [];
    let longest = '';
    for (let i = 0; i < string.length; i++) {
        let temp = '';
        for (let j = i; j < string.length; j++) {
            temp += string[j];
            substrings.push(temp);
            if (isPalindrome(temp) && temp.length > longest.length) {
                longest = temp;
            }
        }
    }
    return longest;
}


module.exports = longetstPalindromeSubstring ;