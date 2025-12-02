export default (bank) => {
    return bank.accounts.reduce((accumulator, item) => {
        return accumulator + item.balance;
    }, 0);
};
