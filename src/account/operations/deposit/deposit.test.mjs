import { expect, test } from 'vitest';
import deposit from './deposit.mjs';

// tap.test('Dont allow negative deposits', (t) => {
//     const account = {
//         accountId: '123',
//         customer: {
//             id: '4563',
//             name: 'john',
//             email: 'john@email.com'
//         },
//         balance: 100
//     };
//     t.throws(
//         () => deposit(account, -100),
//         'You cannot deposit negative amount'
//     );
//     t.end();
// });

test('Deposit money into account should increase the balance', () => {
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
    expect(result.balance).toBe(200)
});
