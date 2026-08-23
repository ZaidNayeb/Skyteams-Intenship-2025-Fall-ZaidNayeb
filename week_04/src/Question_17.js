/* 
Author  :   Zaid Nayeb
Date    :   2025/12/07

17.	Sentence Abbreviation 
Description: Convert sentence into first-letter abbreviation. 
Example: "I am learning JavaScript" → "I a l J" 

*/
console.log(sentenceAbbreviation("I am learning JavaScript"));

function sentenceAbbreviation(sentence) {
    let words = sentence.split(' ');
    let abbreviation = new Array(words.length);

    for (let i = 0; i < words.length; i++) {
        abbreviation[i] = words[i][0];
    }

    return abbreviation.toString().replaceAll(',', ' ');
}
module.exports =  sentenceAbbreviation ;