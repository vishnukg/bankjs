import { expect, test } from "vitest";
import withdraw from "./withdraw.mjs";

test("Withdraw money from an account", () => {
    const account = {
        accountId: "123",
        customer: {
            id: "4563",
            name: "John",
            email: "john@email.com"
        },
        balance: 100
    };

    const result = withdraw(account, 100);
    expect(result.balance).toBe(0);
});

test("Prevent customer from withdrawing more money that what's available", () => {
    const account = {
        accountId: "123",
        customer: {
            id: "4563",
            name: "john",
            email: "john@email.com"
        },
        balance: 100
    };
    expect(() => {
        withdraw(account, 140);
    }).toThrow("Not enough money to withdraw from the account");
});

test("Cannot withdraw negative money from account", () => {
    const account = {
        accountId: "123",
        customer: {
            id: "4563",
            name: "john",
            email: "john@email.com"
        },
        balance: 100
    };

    expect(() => {
        withdraw(account, -100);
    }).toThrow("You cannot withdraw negative amount");
});
