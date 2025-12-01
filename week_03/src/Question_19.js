// Author : Zaid Nayeb
// Date   : 2025/11/26
/*
19.	Pattern Printing – Pyramid Example: 
Input: 
5 
Output: 
    *   
   ***   
  *****   
 ******* 
********* 

*/

rightTriangle(10)
function rightTriangle(lines) {
    for (let i = 1; i < lines; i++) {
        for (let j = lines; j >= i; j--) {
            process.stdout.write("  ");
        }
        for (let k = 1; k <= i; k++) {
            process.stdout.write(" *");
        }
        for (let l = 0; l < i - 1; l++) {
            process.stdout.write(" *")

        }
        console.log();
    }
}