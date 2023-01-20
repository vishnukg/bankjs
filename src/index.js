import { deposit, withdraw } from './account/index.js';
import { balance } from './bank/index.js';
/**
 * @type {{id: string, customer: {id: string,
 * name: string,
 * email: string}, balance: number}}
 */
const account = {
    id: '424',
    customer: {
        id: '333',
        name: 'John',
        email: 'John@email'
    },
    balance: 100
};

const withdrawRes = withdraw(account, 100);
console.log(withdrawRes);

const depositRes = deposit(withdrawRes, 300);

const bank = {
    accounts: [depositRes]
};
console.log(balance(bank));
