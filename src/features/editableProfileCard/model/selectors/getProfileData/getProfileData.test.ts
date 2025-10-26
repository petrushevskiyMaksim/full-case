import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileData } from './getProfileData';
import { Country } from '../../../../../entities/Country/model/types/country';
import { Currency } from '../../../../../entities/Currency/model/types/currency';

describe('getProfileData.test', () => {
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
                data: data,
            },
        };
        expect(getProfileData(state as StateSchema)).toEqual(data);
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getProfileData(state as StateSchema)).toEqual(undefined);
    });
});
