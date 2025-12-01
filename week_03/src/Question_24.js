// Author : Zaid Nayeb
// Date   : 2025/11/26
/*
24.	Generate Pascal’s Triangle 
Description: Implement pascalTriangle(rows), which prints Pascal’s Triangle up to n rows. 
Example: 
Input: 
5 
Output: 
     1 
    1 1 
   1 2 1 
  1 3 3 1 
 1 4 6 4 1 

*/
pascalTriangle(5);
function pascalTriangle(params) {
    let num = 1;
    for (let i = 1; i < num; i++) {
        
        num *= i;
        let arr = num.toString().split("").map(Number);
        console.log(arr);

    }



}