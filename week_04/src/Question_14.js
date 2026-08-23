/* 
Author  :   Zaid Nayeb
Date    :   2025/12/05

14.	All Permutations of a String 
Description: Generate all permutations. Input: "abc" → abc, acb, bac, ... 

*/

console.log(stringPermutations('abcd'));

function stringPermutations(str) {
    if (str === '') {
        return [''];
    }

    let chars = [];
    for (let i = 0; i < str.length; i++) {
        chars[i] = str[i];
    }

    let results = [];

    function permute(a, left) {
        if (left === a.length - 1) {
            let s = '';
            for (let k = 0; k < a.length; k++) {
                s += a[k];
            }
            results[results.length] = s;
            return;
        }

        for (let j = left; j < a.length; j++) {
            let temp = a[left];
            a[left] = a[j];
            a[j] = temp;

            permute(a, left + 1);
            temp = a[left];
            a[left] = a[j];
            a[j] = temp;
        }
    }

    permute(chars, 0);
    return results;
}
module.exports =  stringPermutations ;