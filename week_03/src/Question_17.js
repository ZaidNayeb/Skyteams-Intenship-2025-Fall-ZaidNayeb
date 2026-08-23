// Author : Zaid Nayeb
// Date   : 2025/11/26
/*
17.	Pattern Printing – Right-angled Triangle Example: 
Input: 
4 
Output: 
*   
**   
***   
**** 

*/
starTriangle(50);
function starTriangle(lines) {
    for (let i = 1; i <= lines; i++) {
        for (let j = 1; j <= i; j++) {
            process.stdout.write("*");
        }
        console.log();
    }
}