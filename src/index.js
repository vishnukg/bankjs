import withdraw from './operations/withdraw/withdraw.js';

export * from './operations/withdraw/index.js';

const account = {
    id: '424',
    customer: {
        id: '333',
        name: 'John',
        email: 'John@email'
    },
    balance: 100
};
console.log(withdraw(account, 100));
