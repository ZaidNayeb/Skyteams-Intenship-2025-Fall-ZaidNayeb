/* 
Author  :   Zaid Nayeb
Date    :   2025/12/05

13.	String Pattern Matching ("abba") 
Description: Check if sentence follows the pattern. 
Example: "dog cat cat dog" → True 

*/
console.log(stringPattern("aaba", "dog dog cat dog"));

function stringPattern(pattern, str) {
    const words = str.split(" ");
    const map = {};      
    const used = new Set();  

    for (let i = 0; i < pattern.length; i++) {
        const c = pattern[i];
        const w = words[i];

        if (map[c] !== undefined) {
            if (map[c] !== w) return false;
        } else {
            if (used.has(w)) return false;

            map[c] = w;
            used.add(w);
        }
    }

    return true;
}

module.exports =  stringPattern ;


