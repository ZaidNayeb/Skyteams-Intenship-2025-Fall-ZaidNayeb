// Author : Zaid Nayeb
// Date   : 2025/11/26
/*
18.	Pattern Printing – Right-aligned Triangle Example: 
Input: 
4 
Output: 
   *   
  **   
 ***   
**** 

*/

rightTriangle(10)
function rightTriangle(lines) {
    for (let i = 0; i < lines; i++) {
        for (let j = lines; j >= i; j--) {
            process.stdout.write("  ");
        }
        for (let k = 0; k <= i; k++) {
            process.stdout.write(" *");

        }
        console.log();
    }
}