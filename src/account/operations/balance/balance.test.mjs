import balance from './balance.mjs';
import { expect , test} from "vitest"

test('View available balance of a customer', () => {
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
    expect(result).toBe(100)
});
