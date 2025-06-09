import { expect, describe, it } from "vitest";
import deposit from "./deposit.mjs";

describe("deposit", () => {
    it("should add the amount to the account balance", () => {
        const account = { id: 1, balance: 100 };
        const result = deposit(account, 50);
        expect(result.balance).toBe(150);
        expect(result).not.toBe(account); // Should return a new object
    });

    it("should throw if amount is negative", () => {
        const account = { id: 1, balance: 100 };
        expect(() => deposit(account, -10)).toThrow(
            "You must deposit a positive amount"
        );
    });

    it("should throw if amount is zero", () => {
        const account = { id: 1, balance: 100 };
        expect(() => deposit(account, 0)).toThrow(
            "You must deposit a positive amount"
        );
    });

    it("should throw if amount is not a number", () => {
        const account = { id: 1, balance: 100 };
        expect(() => deposit(account, "abc")).toThrow(
            "Deposit amount must be a valid number"
        );
        expect(() => deposit(account, NaN)).toThrow(
            "Deposit amount must be a valid number"
        );
    });

    it("should throw if account is invalid", () => {
        expect(() => deposit(null, 10)).toThrow("Invalid account object");
        expect(() => deposit({}, 10)).toThrow("Invalid account object");
        expect(() => deposit({ id: 1, balance: "foo" }, 10)).toThrow(
            "Invalid account object"
        );
    });
});
