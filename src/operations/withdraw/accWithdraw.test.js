import tap from 'tap';
import { accWithdraw } from './accWithdraw.js';

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

    const result = accWithdraw(account, 100);
    t.equal(result.balance, 0);
    t.end();
});

tap.test(
    "Prevent customer from withdrawing more money that what's available",
    (t) => {
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
            () => accWithdraw(account, 140),
            'Not enough money to withdraw from the account'
        );
        t.end();
    }
);

tap.test('Cannot withdraw negative money from account', (t) => {
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
        () => accWithdraw(account, -150),
        'You cannot withdraw negative amount'
    );
    t.end();
});
