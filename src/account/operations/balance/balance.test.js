import { describe, it, expect } from "vitest";
import balance from "./balance.js";

describe("balance operation", () => {
    it("returns the balance when account has balance property", () => {
        const account = { balance: 100 };
        expect(balance(account)).toBe(100);
    });

    it("returns 0 when balance is undefined", () => {
        const account = {};
        expect(balance(account)).toBe(0);
    });

    it("returns 0 when balance is null", () => {
        const account = { balance: null };
        expect(balance(account)).toBe(0);
    });

    it("throws error when account is null", () => {
        expect(() => balance(null)).toThrow(
            "Invalid account: Expected an object"
        );
    });

    it("throws error when account is undefined", () => {
        expect(() => balance(undefined)).toThrow(
            "Invalid account: Expected an object"
        );
    });

    it("throws error when account is not an object", () => {
        expect(() => balance("not an object")).toThrow(
            "Invalid account: Expected an object"
        );
        expect(() => balance(123)).toThrow(
            "Invalid account: Expected an object"
        );
    });
});
