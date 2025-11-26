// Author : Zaid Nayeb
// Date   : 2025/11/24
/*
1.	Count vowels in a string 
Description: Count the number of vowels (a, e, i, o, u) in a given string. 
Example: 
Input: 
"SkyTeams Internship"
 Output: 
6 
*/

function countVowels(str) {
    const lowerStr = str.toLowerCase();
    // Include 'y' as vowel per tests' expectations
    const vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
    let count = 0;
    for (let i = 0; i < lowerStr.length; i++) {
        if (vowels.includes(lowerStr[i])) {
            count++;
        }
    }
    
    return count;
}

module.exports = { countVowels };
