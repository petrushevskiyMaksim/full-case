import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Input } from './Input';

const meta = {
    title: 'shared/InputRedesigned',
    component: Input,
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        placeholder: 'Type text',
        value: 'text',
    },
};
