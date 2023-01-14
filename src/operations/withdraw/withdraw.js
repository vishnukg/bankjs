export default (account, amount) => {
    if (amount < 0) {
        throw new Error('You cannot withdraw negative amount');
    }

    if (account.balance < amount) {
        throw new Error('Not enough money to withdraw from the account');
    }

    return {
        ...account,
        balance: account.balance - amount
    };
};
