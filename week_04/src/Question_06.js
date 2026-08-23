/* 
Author  :   Zaid Nayeb
Date    :   2025/12/03

6.	Binary Search Algorithm 
Description: Implement binary search in a sorted array. 
Example: 
Input: [1, 3, 5, 7, 9], Target = 7 
Output: Found at index 3 

*/
let arr = [1, 3, 5, 7, 9];
let target = 7;
console.log(binarySearch(arr, target, 0, arr.length - 1));

function binarySearch(arr, target, start, end) {
    if (start > end) return false;
    let mid = Math.floor((start + end) / 2);

    if (target === arr[mid]) return mid;
    else if (target > arr[mid]) return binarySearch(arr, target, mid + 1, end);
    else return binarySearch(arr, target, start, mid - 1);
}

module.exports =  binarySearch ;

// function binarySearch(arr,target){
//     let start = 0;
//     let end = arr.length - 1;

//     while( start <= end ){
//         let mid = Math.floor((start + end) / 2);

//         if( target === arr[mid]){
//             return mid;
//         } else if( target > arr[mid]){
//             start = mid + 1;
//         } else{
//             start = mid - 1;
//         }
//     }
//     return false;
// }
