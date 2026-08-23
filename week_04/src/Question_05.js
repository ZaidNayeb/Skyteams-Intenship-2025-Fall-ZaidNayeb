/* 
Author  :   Zaid Nayeb
Date    :   2025/12/03

5.	Rearrange Array (Even Before Odd) 
Description: Move even numbers before odd numbers while maintaining order. 
Example: 
Input: [1, 2, 3, 4, 5, 6] 
Output: [2, 4, 6, 1, 3, 5] 

*/
console.log(evenBeforeOdd([1, 2, 3, 4, 5, 6]));

function evenBeforeOdd(arr) {
    let even = [];
    let odd = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) even.push(arr[i]);
        else odd.push(arr[i]);
    }
    let merge = even;
    for (let num of odd) merge.push(num);

    return merge;
}
module.exports =  evenBeforeOdd ;