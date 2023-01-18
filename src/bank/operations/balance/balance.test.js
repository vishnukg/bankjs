import tap from 'tap';
import { balance } from './balance.js';

tap.test('View available balance of the bank', (t) => {
    const account1 = {
        accountId: '123',
        customer: {
            id: '4563',
            name: 'John',
            email: 'john@email.com'
        },
        balance: 100
    };

    const account2 = {
        accountId: '3234',
        customer: {
            id: '38883',
            name: 'Jacob',
            email: 'jacob@email.com'
        },
        balance: 100
    };

    const bank = {
        name: 'The Bank',
        accounts: [account1, account2]
    };

    const result = balance(bank);
    t.equal(result, 200);
    t.end();
});
