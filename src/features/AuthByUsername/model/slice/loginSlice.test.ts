import { DeepPartial } from 'shared/lib/hooks/DeepPartial/DeepPartial';
import { loginActions, loginReducer } from './loginSlice';
import { LoginSchema } from '../types/loginSchema';

describe('loginSlice.test', () => {
    test('test set username', () => {
        const state: DeepPartial<LoginSchema> = { username: '12345' };
        expect(
            loginReducer(
                state as LoginSchema,
                loginActions.setUsername('12345')
            )
        ).toEqual({ username: '12345' });
    });

    test('test set password', () => {
        const state: DeepPartial<LoginSchema> = { password: '12345' };
        expect(
            loginReducer(
                state as LoginSchema,
                loginActions.setPassword('12345')
            )
        ).toEqual({ password: '12345' });
    });
});
