// Author : Zaid Nayeb
// Date   : 2025/11/27
/*
27.	Find Unique Elements in an Array 
Description: Return an array with only unique elements from the input array. 
Example: 
Input: 
[1, 2, 2, 3, 4, 4, 5] 
Output: 
[1, 2, 3, 4, 5] 



*/
let arr = [3, 1, 3, 5, 1] ;
console.log(findUnique(arr));

function findUnique(arr) {
    let unique = [];

    for (let i = 0; i < arr.length; i++) {
        let found = false;

        for (let j = 0; j < unique.length; j++) {
            if (arr[i] === unique[j]) {
                found = true;
                break;
            }

        }
        if (!found) {
            unique.push(arr[i]);
        }

    }
    return unique;
}