import { validateProfileData } from './validateProfileData';
import { Country } from '../../../../../entities/Country/model/types/country';
import { Currency } from '../../../../../entities/Currency/model/types/currency';
import { ValidateProfileErrors } from '../../types/editableProfileCardSchema';

const data = {
    firstname: 'max',
    lastname: 'petrushevskiy',
    age: 22,
    username: 'admin',
    country: Country.Russia,
    city: 'tymen',
    currency: Currency.RUB,
};

describe('validateProfileData.test', () => {
    test('success', async () => {
        const result = validateProfileData(data);

        expect(result).toEqual([]);
    });

    test('without first and last name', async () => {
        const result = validateProfileData({
            ...data,
            firstname: '',
            lastname: '',
        });

        expect(result).toEqual([ValidateProfileErrors.INCORECT_USER_DATA]);
    });

    test('incorrect age', async () => {
        const result = validateProfileData({
            ...data,
            age: undefined,
        });

        expect(result).toEqual([ValidateProfileErrors.INCORECT_AGE]);
    });

    test('incorrect country', async () => {
        const result = validateProfileData({
            ...data,
            country: undefined,
        });

        expect(result).toEqual([ValidateProfileErrors.INCORECT_COUNTRY]);
    });

    test('incorrect all', async () => {
        const result = validateProfileData({});

        expect(result).toEqual([
            ValidateProfileErrors.INCORECT_USER_DATA,
            ValidateProfileErrors.INCORECT_AGE,
            ValidateProfileErrors.INCORECT_COUNTRY,
        ]);
    });
});
