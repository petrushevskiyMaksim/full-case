import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { ListBox } from './ListBox';
import { fn } from '@storybook/test';

const meta = {
    title: 'shared/ListBox',
    component: ListBox,
} satisfies Meta<typeof ListBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {
        onChange: fn(),
        value: 'asd',
        items: [
            { value: '123', content: '123' },
            { value: '1234', content: '1234', disabled: true },
            { value: '12345', content: '12345' },
        ],
    },
};
