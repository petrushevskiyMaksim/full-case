import { DeepPartial } from 'shared/lib/redux/DeepPartial/DeepPartial';
import { getLoginUsername } from './getLoginUsername';
import { StateSchema } from 'app/providers/StoreProvider';

describe('getLoginUsername.test', () => {
    test(`should return { password: '12345' }`, () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: { username: '12345' },
        };
        expect(getLoginUsername(state as StateSchema)).toEqual('12345');
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginUsername(state as StateSchema)).toEqual('');
    });
});
