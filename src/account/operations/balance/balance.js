export default (account) => {
    if (!account || typeof account !== "object") {
        throw new Error("Invalid account: Expected an object");
    }
    return account.balance ?? 0;
};
