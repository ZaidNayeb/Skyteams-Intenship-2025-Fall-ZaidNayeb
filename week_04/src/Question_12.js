/* 
Author  :   Zaid Nayeb
Date    :   2025/12/05

12.	Character Frequency Counter 
Description: Count occurrences of characters. 
Input: "banana" → {b:1, a:3, n:2} 

*/

console.log(charFrequency("banana"));

function charFrequency(str) {
    str = str.toLowerCase().replace(/\s/g, '');

    const arr = str.split(''); 
    const freq = {};          

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === '') continue;
        let counter = 1;

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                counter++;
                arr[j] = ''; 
            }
        }

        freq[arr[i]] = counter;
    }

    return freq;
}

module.exports =  charFrequency ;


