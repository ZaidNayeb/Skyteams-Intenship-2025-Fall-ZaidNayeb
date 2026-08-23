// Author : Zaid Nayeb
// Date   : 2025/11/26
/*
20.	Body Mass Index (BMI) Calculator 
Description: Given weight (kg) and height (m), calculate BMI using: BMI = weight / (height * height) Then categorize it into: 
•	Underweight: BMI < 18.5 
•	Normal weight: 18.5 ≤ BMI < 25 
•	Overweight: 25 ≤ BMI < 30 
• Obese: BMI ≥ 30 
Example: Input: 70, 1.75 
Output: BMI = 22.86 (Normal weight) 
*/

console.log(BMI(70,175));

function BMI(weight, height){
    if (height >= 4) {
        height /= 100;
    }
    let bmi = weight / (height * height);
    bmi = Number(bmi.toFixed(2));
    let output;
    switch (true) {
        case bmi < 18.5:
            output = 'BMI = ' + bmi +' (Under Weight)'
            return output;
            break;
        case bmi < 25:
            output = 'BMI = '+ bmi +' (Normal Weight)'
            return output;
            break;
        case bmi < 30:
            output = 'BMI = ' + bmi +' (Over Weight)'
            return output;
            break;
        case bmi >= 30:
            output = 'BMI = ' + bmi +' (Obese)'
            return output;
            break;
    }
}

module.exports = BMI;