import tap from 'tap';
import balance from './balance.js';

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

    const result = balance(account, 100);
    console.log(result);
    t.equal(result, 100);
    t.end();
});
