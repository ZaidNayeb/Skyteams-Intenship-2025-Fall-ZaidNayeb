/*
Author  :   Zaid Nayeb
Date    :   2025/12/09

24.	K-th Largest Element  
Given an array of numbers and a value k, find the number that would appear 
in the k-th position if the array were sorted in descending order. 

*/


export function topKthElement(arr, k) {
    const sortedArr = mergeSort(arr);
    return sortedArr[sortedArr.length - k];
}

export function mergeSort(arr) {
    if (arr.length <= 1) return arr;

    const middle = Math.floor(arr.length / 2);

    let left = [];
    let right = [];

    let j = 0;
    for (let i = 0; i < arr.length; i++) {
        if (i < middle) {
            left[i] = arr[i];
        } else {
            right[j] = arr[i];
            j++;
        }
    }
    left = mergeSort(left);
    right = mergeSort(right);
    merge(left, right, arr);
    return arr;


}

export function merge(left, right, arr) {
    let leftSize = left.length;
    let rightSize = arr.length - leftSize;
    let i = 0, l = 0, r = 0;

    while (l < leftSize && r < rightSize) {
        if (left[l] < right[r]) {
            arr[i] = left[l];
            l++;
            i++;
        } else {
            arr[i] = right[r];
            r++;
            i++;
        }
    }

    while (l < leftSize) {
        arr[i] = left[l];
        l++;
        i++;
    }
    while (r < rightSize) {
        arr[i] = right[r];
        r++;
        i++;
    }

}