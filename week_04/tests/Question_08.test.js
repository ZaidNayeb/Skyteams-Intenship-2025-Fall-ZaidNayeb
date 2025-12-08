import { describe, it, expect, vi, beforeEach } from 'vitest';
import ATM from '../src/Question_08';

describe('Question 08 Tests - ATM Class', () => {
    let atm;
    let logSpy;

    beforeEach(() => {
        atm = new ATM('Zaid', 1000);
        logSpy = vi.spyOn(console, 'log').mockImplementation(() => {});
    });

    it('1. Should initialize ATM with correct owner and balance', () => {
        expect(atm.owner).toBe('Zaid');
        expect(atm.balance).toBe(1000);
    });

    it('2. Deposit should increase balance and print message', () => {
        atm.deposit(500);
        expect(atm.balance).toBe(1500);
        expect(logSpy).toHaveBeenCalledWith('500 has been depositted. \nYour balance: 1500');
    });

    it('3. Withdraw should decrease balance and print message', () => {
        atm.withdraw(300);
        expect(atm.balance).toBe(700);
        expect(logSpy).toHaveBeenCalledWith('300 has been withdrawn. \nYour balance: 700');
    });

    it('4. showBalance should print correct balance', () => {
        atm.showBalance();
        expect(logSpy).toHaveBeenCalledWith('Your balance :  1000');
    });

    it('5. Multiple deposits update balance correctly', () => {
        atm.deposit(200);
        atm.deposit(300);
        expect(atm.balance).toBe(1500);
    });

    it('6. Multiple withdrawals update balance correctly', () => {
        atm.withdraw(100);
        atm.withdraw(200);
        expect(atm.balance).toBe(700);
    });

    it('7. Withdraw all balance results in zero balance', () => {
        atm.withdraw(1000);
        expect(atm.balance).toBe(0);
    });

    it('8. Deposit and withdraw together update balance correctly', () => {
        atm.deposit(400);
        atm.withdraw(150);
        expect(atm.balance).toBe(1250);
    });

    afterEach(() => {
        logSpy.mockRestore();
    });
});
