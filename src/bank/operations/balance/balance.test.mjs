import {expect, test} from "vitest"
import balance from './balance.mjs';

test('View available balance of the bank', () => {
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
    expect(result).toBe(200)
});
