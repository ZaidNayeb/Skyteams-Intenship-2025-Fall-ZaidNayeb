/* 
Author  :   Zaid Nayeb
Date    :   2025/12/05

11.	String Rotation Check 
Description: Check if one string is rotation of another. 
Example: 
"waterbottle", "erbottlewat" → True 

*/
console.log(rotateArray("waterbottle", "erbottlewat"));

function rotateArray(string, rotate) {

    let doubled = string + string;  
    for (let i = 0; i <= doubled.length - rotate.length; i++) {
        let match = true;

        for (let j = 0; j < rotate.length; j++) {
            if (doubled[i + j] !== rotate[j]) {
                match = false;
                break;
            }
        }

        if (match == true) {
            return true;
        }
    }

    return false;
}
module.exports =  rotateArray ;
