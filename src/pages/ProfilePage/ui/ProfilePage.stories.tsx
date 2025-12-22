import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import ProfilePage from './ProfilePage';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import avatar from '@/shared/assets/tests/avatar.jpg';
import { Theme } from '@/shared/const/theme';

const meta = {
    title: 'pages/ProfilePage',
    component: ProfilePage,
} satisfies Meta<typeof ProfilePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    decorators: [
        StoreDecorator({
            profile: {
                form: {
                    firstname: 'max',
                    lastname: 'petrushevskiy',
                    age: 22,
                    username: 'admin',
                    country: Country.Russia,
                    city: 'tymen',
                    currency: Currency.RUB,
                    avatar: avatar,
                },
            },
        }),
    ],
};

export const Dark: Story = {
    decorators: [
        ThemeDecorator(Theme.DARK),
        StoreDecorator({
            profile: {
                data: {
                    firstname: 'max',
                    lastname: 'petrushevskiy',
                    age: 22,
                    username: 'admin',
                    country: Country.Russia,
                    city: 'tymen',
                    currency: Currency.RUB,
                    avatar: avatar,
                },
            },
        }),
    ],
};
