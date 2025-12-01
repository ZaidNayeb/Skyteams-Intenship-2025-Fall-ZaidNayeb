// Author : Zaid Nayeb
// Date   : 2025/11/26
/*
25. Number Guessing Game Description: 
•	The program randomly selects a number between 1 and 100. 
•	The user must guess the number. 
•	The program gives hints like “Too High” or “Too Low”. 
•	Continue until the user guesses correctly. 

*/

const readline = require('readline');

const read = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let num = Math.random() * 100;
num = Number(num.toFixed());
console.log(num);

function askguess() {
    read.question('Guess a number ', (answer) => {
        const guess = parseInt(answer);

        if (guess === num) {
            console.log(' Correct');
            read.close();
        } else if (guess > num) {
            console.log('Too High');
            askguess();
        } else {
            console.log('Too Low');
            askguess();
        }
    })

}
askguess();