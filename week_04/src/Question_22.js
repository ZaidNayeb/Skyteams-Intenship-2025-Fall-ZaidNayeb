/*
Author  :   Zaid Nayeb
Date    :   2025/12/07

22.	Merge Overlapping Intervals 
Input: [[1,3],[2,6],[8,10]] → [[1,6],[8,10]] 
*/

console.log(mergeIntervals([[1, 3], [2, 6], [8, 10]]));

 function mergeIntervals(intervals) {


    let prev = intervals[0];
    let result = [];
    for (let curr of intervals) {
        if (curr[0] <= prev[1]) {
            if (curr[1] > prev[1]) {
                prev[1] = curr[1];
            } else {
                prev[1] = prev[1];
            }
        } else {
            result.push(prev);
            prev = curr;
        }
    }
    result.push(prev);

    return result;
}

module.exports = mergeIntervals;

