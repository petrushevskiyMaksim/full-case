import type { Meta, StoryObj } from '@storybook/react-webpack5';
import LoginForm from './LoginForm';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

const meta = {
    title: 'features/LoginForm',
    component: LoginForm,
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        onSuccess: () => true,
    },
    decorators: [
        StoreDecorator({
            loginForm: { username: '123', password: '123', isLoading: false },
        }),
    ],
};

export const withError: Story = {
    args: {
        onSuccess: () => true,
    },
    decorators: [
        StoreDecorator({
            loginForm: {
                username: '123',
                password: '123',
                isLoading: false,
                error: 'ERROR',
            },
        }),
    ],
};

export const Loading: Story = {
    args: {
        onSuccess: () => true,
    },
    decorators: [
        StoreDecorator({
            loginForm: { username: '', password: '', isLoading: true },
        }),
    ],
};
