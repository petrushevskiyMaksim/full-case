import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { AppLink } from '../../redesigned/AppLink';

const meta = {
    title: 'shared/AppLink',
    component: AppLink,
    args: {
        to: '/',
        children: 'Link',
    },
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        variant: 'primary',
    },
};

export const Red: Story = {
    args: {
        variant: 'red',
    },
};

export const PrimaryDark: Story = {
    args: {
        variant: 'primary',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const RedDark: Story = {
    args: {
        variant: 'red',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
