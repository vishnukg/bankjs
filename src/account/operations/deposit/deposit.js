export function deposit(account, amount) {
    if (amount < 0) {
        throw new Error('You cannot deposit negative amount');
    }

    return {
        ...account,
        balance: account.balance + amount
    };
}
