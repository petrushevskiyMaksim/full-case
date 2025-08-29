import { updateProfileData } from './updateProfileData';
import { TestAsyncThunk } from 'shared/config/tests/TestAsyncThunk/TestAsyncThunk';
import { Country } from '../../../../Country/model/types/country';
import { Currency } from '../../../../Currency/model/types/currency';
import { ValidateProfileErrors } from '../../types/profile';

const data = {
    firstname: 'max',
    lastname: 'petrushevskiy',
    age: 22,
    username: 'admin',
    country: Country.Russia,
    city: 'tymen',
    currency: Currency.RUB,
    id: '1',
};

describe('updateProfileData.test', () => {
    test('success', async () => {
        //@ts-ignore
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: data,
            },
        });

        thunk.api.put.mockReturnValue(Promise.resolve({ data }));

        const result = await thunk.callThunk();

        expect(thunk.api.put).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);
    });

    test('error', async () => {
        //@ts-ignore
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: data,
            },
        });

        thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));

        const result = await thunk.callThunk();

        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual([ValidateProfileErrors.SERVER_ERROR]);
    });

    test('validate error', async () => {
        //@ts-ignore
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: { ...data, firstname: '' },
            },
        });

        const result = await thunk.callThunk();

        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual([
            ValidateProfileErrors.INCORECT_USER_DATA,
        ]);
    });
});
