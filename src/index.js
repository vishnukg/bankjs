import { accWithdraw } from './operations/index.js';

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
console.log(accWithdraw(account, 100));
