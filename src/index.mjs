import { deposit, withdraw } from './account/index.mjs';
import { balance } from './bank/index.mjs';
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

console.log(`Initial State: ${JSON.stringify(account)}`);
const withdrawRes = withdraw(account, 100);
console.log(`withdrawn State: ${JSON.stringify(withdrawRes)}`);

const depositRes = deposit(withdrawRes, 300);
console.log(`deposited State: ${JSON.stringify(depositRes)}`);

const bank = {
    accounts: [depositRes]
};
console.log(`Final bank balance: ${balance(bank)}`);
