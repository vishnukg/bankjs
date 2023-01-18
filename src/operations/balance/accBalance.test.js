import tap from 'tap';
import { accBalance } from './accBalance.js';

tap.test('View available balance of a customer', (t) => {
    const account = {
        accountId: '123',
        customer: {
            id: '4563',
            name: 'John',
            email: 'john@email.com'
        },
        balance: 100
    };

    const result = accBalance(account, 100);
    console.log(result);
    t.equal(result, 100);
    t.end();
});
