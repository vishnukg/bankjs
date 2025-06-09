export default (account, amount) => {
    if (typeof amount !== "number" || isNaN(amount)) {
        throw new Error("Deposit amount must be a valid number");
    }
    if (amount <= 0) {
        throw new Error("You must deposit a positive amount");
    }
    if (!account || typeof account.balance !== "number") {
        throw new Error("Invalid account object");
    }

    return {
        ...account,
        balance: account.balance + amount
    };
};
