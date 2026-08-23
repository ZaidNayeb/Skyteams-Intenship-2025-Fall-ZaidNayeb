// Author : Zaid Nayeb
// Date   : 2025/11/28

/*
15.	Check for Armstrong number 
Description: A number is Armstrong if the sum of its digits raised to the power of the number of digits equals the number itself. 
Example: 
Input: 
153 Output: Armstrong Input: 
123 Output: 
Not Armstrong 

*/

function armstrong(num) {
    let origin = num;
    let arr = [];
    while (num > 0) {
        arr.unshift(num % 10);
        num = Math.floor(num / 10)
    }

    let counter = arr.length;
    let sum = 0;
    const arms = arr.forEach(index => {
        let a = index;
        for (let i = 1; i < counter; i++) {
            a *= index;
        }
        return sum += a;
    })

    return sum === origin ? 'Armstrong' : 'Not Armstrong ';

}
console.log(armstrong(370));

module.exports = armstrong;
