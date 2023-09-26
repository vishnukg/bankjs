import { expect, test } from "vitest";
import deposit from "./deposit.mjs";

test("Dont allow negative deposits", () => {
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
        deposit(account, -100);
    }).toThrow("You cannot deposit negative amount");
});

test("Deposit money into account should increase the balance", () => {
    const account = {
        accountId: "123",
        customer: {
            id: "4563",
            name: "john",
            email: "john@email.com"
        },
        balance: 100
    };
    const result = deposit(account, 100);
    expect(result.balance).toBe(200);
});
