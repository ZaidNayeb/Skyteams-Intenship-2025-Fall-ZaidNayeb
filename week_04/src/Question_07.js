/* 
Author  :   Zaid Nayeb
Date    :   2025/12/05

7.	Rock, Paper, Scissors Game 
Description: Simulate a game using random computer choices. 

*/

console.log(rockPaperScissor('paper'));


function rockPaperScissor(user) {
    const userChoice = user.toLowerCase();

    const options = ['rock', 'paper', 'scissors'];
    const pcChoice = options[Math.floor(Math.random() * 3)];

    console.log('you :', userChoice);
    console.log('pc  :', pcChoice);

    if (userChoice === pcChoice) {
        return 'tie';
    }

    if (userChoice == 'rock' && pcChoice == 'paper' || userChoice == 'paper' && pcChoice == 'scissors' || userChoice == 'scissors' && pcChoice == 'rock') {
        return 'pc wins'
    } else {
        return 'you win'
    }
}
module.exports =  rockPaperScissor ;