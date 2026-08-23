/* 
Author  :   Zaid Nayeb
Date    :   2025/12/03

2.	Merge Two Sorted Arrays 
Description: Merge two sorted arrays into a single sorted array. 
Example: 
Input: [1, 3, 5], [2, 4, 6] 
Output: [1, 2, 3, 4, 5, 6] 


*/
console.log(mergeSorted([1, 3, 5], [2, 4, 6]));

export function mergeSorted(arr1, arr2) {
    let merge = arr1;
    for (let num of arr2) merge.push(num);

    for (let i = 0; i < merge.length; i++) {
        for (let j = i + 1; j < merge.length; j++) {
            let temp = merge[i];
            if (temp > merge[j]) {
                merge[i] = merge[j];
                merge[j] = temp;
            }
        }
    }
    return merge;
}
module.exports = mergeSorted;
