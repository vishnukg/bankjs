import tap from 'tap';
import { deposit } from './deposit.js';

tap.test('Dont allow negative deposits', (t) => {
    const account = {
        accountId: '123',
        customer: {
            id: '4563',
            name: 'john',
            email: 'john@email.com'
        },
        balance: 100
    };
    t.throws(
        () => deposit(account, -100),
        'You cannot deposit negative amount'
    );
    t.end();
});

tap.test('Deposit money into account should increase the balance', (t) => {
    const account = {
        accountId: '123',
        customer: {
            id: '4563',
            name: 'john',
            email: 'john@email.com'
        },
        balance: 100
    };
    const result = deposit(account, 100);
    t.equal(result.balance, 200);
    t.end();
});
