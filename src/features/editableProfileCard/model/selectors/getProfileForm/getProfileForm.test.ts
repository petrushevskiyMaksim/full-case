import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileForm } from './getProfileForm';
import { Country } from '../../../../../entities/Country/model/types/country';
import { Currency } from '../../../../../entities/Currency/model/types/currency';

describe('getProfileForm.test', () => {
    test('should return data', () => {
        const data = {
            firstname: 'max',
            lastname: 'petrushevskiy',
            age: 22,
            username: 'admin',
            country: Country.Russia,
            city: 'tymen',
            currency: Currency.RUB,
        };

        const state: DeepPartial<StateSchema> = {
            profile: {
                form: data,
            },
        };
        expect(getProfileForm(state as StateSchema)).toEqual(data);
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getProfileForm(state as StateSchema)).toEqual(undefined);
    });
});
