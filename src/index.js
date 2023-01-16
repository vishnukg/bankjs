import withdraw from './operations/withdraw/withdraw.js';

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
console.log(withdraw(account, 100));
