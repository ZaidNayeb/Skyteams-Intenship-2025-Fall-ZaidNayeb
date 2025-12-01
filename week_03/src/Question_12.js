// Author : Zaid Nayeb
// Date   : 2025/11/26
/*
12. Check for palindrome number 
Description: Check if a number reads the same backward and forward. Example: 
Input: 
121 Output: Palindrome Input: 
123 Output: 
Not Palindrome 


*/
console.log(isPalindrome(121))

function isPalindrome(num) {
    num = num + '';
    let arr = num.split('');

    let left = 0;
    let right = arr.length - 1;
    let temp;
    while (left < right) {
        temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        left++;
        right--;
    }
    return arr.join('') === num ? 'Palindrome' : 'Not Palindrome';
}


module.exports = isPalindrome;