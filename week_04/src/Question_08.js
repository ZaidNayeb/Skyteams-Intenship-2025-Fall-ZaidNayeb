/* 
Author  :   Zaid Nayeb
Date    :   2025/12/05

8.	Menu-Based ATM System 
Description: Handle options for balance, withdraw, deposit, exit. 
Example: "100 withdrawn successfully" 

*/

class ATM{

    owner ;    
    balance = 0;

    constructor(owner, balance){
        this.owner = owner;
        this.balance = balance;
    }

     showBalance() {
        console.log(`Your balance :  ${this.balance }`);
    }
    withdraw(amount){
        this.balance -= amount;
        console.log(`${amount } has been withdrawn. \nYour balance: ${this.balance}`);
    }

    deposit(amount){
        this.balance += amount;
        console.log(`${amount } has been depositted. \nYour balance: ${this.balance}`);
    }
    

}

module.exports = ATM;