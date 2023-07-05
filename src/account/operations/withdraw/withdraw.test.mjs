import {expect, test} from "vitest"
import withdraw from './withdraw.mjs';

test('Withdraw money from an account', () => {
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
    expect(result.balance).toBe(0)
});

// tap.test(
//     "Prevent customer from withdrawing more money that what's available",
//     (t) => {
//         const account = {
//             accountId: '123',
//             customer: {
//                 id: '4563',
//                 name: 'john',
//                 email: 'john@email.com'
//             },
//             balance: 100
//         };
//         t.throws(
//             () => withdraw(account, 140),
//             'Not enough money to withdraw from the account'
//         );
//         t.end();
//     }
// );
//
// tap.test('Cannot withdraw negative money from account', (t) => {
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
//         () => withdraw(account, -150),
//         'You cannot withdraw negative amount'
//     );
//     t.end();
// });
