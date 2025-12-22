import { screen } from '@testing-library/react';
import { componentRender } from '@/shared/config/tests/componentRender/componentRender';
import { EditableProfileCard } from './EditableProfileCard';
import { Currency } from '../../../../entities/Currency/model/types/currency';
import { Country } from '../../../../entities/Country/model/types/country';
import { Profile } from '../../../../entities/Profile/model/types/profile';
import { profileReducer } from '../../model/slice/profileSlice';
import userEvent from '@testing-library/user-event';
import { $api } from '@/shared/api/api';

const profile: Profile = {
    id: '1',
    firstname: 'admin',
    lastname: 'admin',
    age: 35,
    currency: Currency.USD,
    country: Country.Belarus,
    city: 'Tymen',
    username: 'gapone',
};

// jest.mock('./EditableProfileCard.module.scss', () => ({
//     __esModule: true,
//     collapsed: 'collapsed',
// }));

const options = {
    initialState: {
        profile: {
            readonly: true,
            data: profile,
            form: profile,
        },
        user: {
            authData: { id: '1', username: 'admin' },
        },
    },
    asyncReducers: { profile: profileReducer },
};

describe('features/EditableProfileCard', () => {
    test('Режим readonly должен переключится', async () => {
        componentRender(<EditableProfileCard id='1' />, options);
        await userEvent.click(
            screen.getByTestId('EditableProfileCardHeader.EditButton')
        );
        expect(
            screen.getByTestId('EditableProfileCardHeader.CancelButton')
        ).toBeInTheDocument();
    });

    test('При отмене значения должны обнулится', async () => {
        componentRender(<EditableProfileCard id='1' />, options);
        await userEvent.click(
            screen.getByTestId('EditableProfileCardHeader.EditButton')
        );

        await userEvent.clear(screen.getByTestId('ProfileCard.firstname'));
        await userEvent.clear(screen.getByTestId('ProfileCard.lastname'));

        await userEvent.type(
            screen.getByTestId('ProfileCard.firstname'),
            'user'
        );
        await userEvent.type(
            screen.getByTestId('ProfileCard.lastname'),
            'user'
        );

        expect(screen.getByTestId('ProfileCard.firstname')).toHaveValue('user');
        expect(screen.getByTestId('ProfileCard.lastname')).toHaveValue('user');

        await userEvent.click(
            screen.getByTestId('EditableProfileCardHeader.CancelButton')
        );

        expect(screen.getByTestId('ProfileCard.firstname')).toHaveValue(
            'admin'
        );
        expect(screen.getByTestId('ProfileCard.lastname')).toHaveValue('admin');
    });

    test('Должна появиться ошибка', async () => {
        componentRender(<EditableProfileCard id='1' />, options);
        await userEvent.click(
            screen.getByTestId('EditableProfileCardHeader.EditButton')
        );

        await userEvent.clear(screen.getByTestId('ProfileCard.firstname'));

        await userEvent.click(
            screen.getByTestId('EditableProfileCardHeader.SaveButton')
        );

        expect(
            screen.getByTestId('EditableProfileCard.Error.Paragraph')
        ).toBeInTheDocument();
    });

    test('Если нет ошибок валидации, то на сервер должен уйти PUT запрос', async () => {
        const mockPutReq = jest.spyOn($api, 'put');

        componentRender(<EditableProfileCard id='1' />, options);
        await userEvent.click(
            screen.getByTestId('EditableProfileCardHeader.EditButton')
        );

        await userEvent.type(
            screen.getByTestId('ProfileCard.firstname'),
            'user'
        );

        await userEvent.click(
            screen.getByTestId('EditableProfileCardHeader.SaveButton')
        );
        expect(mockPutReq).toHaveBeenCalled();
    });
});
