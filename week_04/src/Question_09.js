/* 
Author  :   Zaid Nayeb
Date    :   2025/12/05

9.	String Compression 
Description: Compress using counts of consecutive characters. 
Example: 
"aabcccccaaa" → "a2b1c5a3" 

*/
console.log(stringCompression('aabcccccaaa'));


function stringCompression(str){
    let compressed = '';
    let count = 1;

    for (let i = 0; i < str.length; i++){
        if (str[i] === str[i + 1]) {
            count++;
        } else {
            compressed += str[i] + count;
            count = 1;
        }
    }

    return compressed;
}
module.exports =  stringCompression ;