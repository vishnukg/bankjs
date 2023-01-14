import tap from 'tap';
import withdraw from './withdraw.js';

tap.test('Withdraw money from an account', (t) => {
    const account = {
        accountId: '123',
        customer: {
            id: '4563',
            name: 'John',
            email: 'john@email.com'
        },
        balance: 100
    };

    const result = withdraw(account, 100);
    t.equal(result, 0);
    t.end();
});
