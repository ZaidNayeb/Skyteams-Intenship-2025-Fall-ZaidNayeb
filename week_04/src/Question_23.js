/*
Author  :   Zaid Nayeb
Date    :   2025/12/09

23.	Top K Frequent Elements 
Input: [1,1,1,2,2,3], k=2 → [1,2] 

*/

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));

function topKFrequent(nums, k) {
    let map = {};

    for (let i = 0; i < nums.length; i++) {
        if (!map[nums[i]]) {
            map[nums[i]] = 1;
        } else {
            map[nums[i]]++;
        }
    }

    let pairs = [];
    for (let key in map) {
        pairs.push([Number(key), map[key]]);
    }

    for (let i = 0; i < pairs.length - 1; i++) {
        for (let j = i + 1; j < pairs.length; j++) {
            if (pairs[i][1] < pairs[j][1]) {
                let temp = pairs[i];
                pairs[i] = pairs[j];
                pairs[j] = temp;
            }
        }
    }

    const result = [];
    for (let i = 0; i < k; i++) {
        result.push(pairs[i][0]);
    }

    return result;
}

module.exports = topKFrequent;