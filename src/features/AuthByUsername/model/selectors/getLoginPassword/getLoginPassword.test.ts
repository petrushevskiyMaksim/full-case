import { DeepPartial } from 'shared/lib/hooks/DeepPartial/DeepPartial';
import { getLoginPassword } from './getLoginPassword';
import { StateSchema } from 'app/providers/StoreProvider';

describe('getLoginPassword.test', () => {
    test(`should return value`, () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: { password: '12345' },
        };
        expect(getLoginPassword(state as StateSchema)).toEqual('12345');
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginPassword(state as StateSchema)).toEqual('');
    });
});
