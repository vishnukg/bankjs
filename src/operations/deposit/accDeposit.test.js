import tap from 'tap';
import { accDeposit } from './accDeposit.js';

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
        () => accDeposit(account, -100),
        'You cannot deposit negative amount'
    );
    t.end();
});
