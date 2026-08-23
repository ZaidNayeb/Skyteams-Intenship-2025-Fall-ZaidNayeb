/* 
Author  :   Zaid Nayeb
Date    :   2025/12/05

10.	Check Unique Characters 
Description: Return whether a string contains only unique chars. 
Example: 
"hello" → Not Unique 

*/
console.log(uniqueChars("abc"));


function uniqueChars(str){
    for (let i = 0; i < str.length; i++) {
        for(let j = i + 1; j < str.length; j++){
            if(str[i] === str[j]) return false;
        }
    }
    return true;
}

module.exports =  uniqueChars ;