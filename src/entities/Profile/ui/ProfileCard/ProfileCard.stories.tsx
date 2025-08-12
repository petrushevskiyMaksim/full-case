import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { ProfileCard } from './ProfileCard';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import avatar from 'shared/assets/tests/avatar.jpg';

const meta = {
    title: 'entities/ProfileCard',
    component: ProfileCard,
} satisfies Meta<typeof ProfileCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
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
};

export const withError: Story = {
    args: {
        error: 'true',
    },
};

export const Loading: Story = {
    args: {
        isLoading: true,
    },
};
