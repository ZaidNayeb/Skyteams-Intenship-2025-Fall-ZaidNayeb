/* 
Author  :   Zaid Nayeb
Date    :   2025/12/03

4.	Intersection of Two Arrays 
Description: Return elements present in both arrays. 
Example: 
Input: [1, 2, 3, 4], [3, 4, 5, 6] 
Output: [3, 4] 

*/
console.log(intersection([1, 2, 3, 4], [3, 4, 5, 6]));

function intersection(arr1, arr2) {
    let arr = [];
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                arr.push(arr1[i]);
            }
        }
    }
    return arr;
}
module.exports =  intersection ;