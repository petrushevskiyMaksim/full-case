import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { ListBox } from './ListBox';
import { fn } from '@storybook/test';
// import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

const meta = {
    title: 'shared/ListBox',
    component: ListBox,
    decorators: [
        (Story) => <div style={{padding:'100px'}}><Story /></div>
    ],
} satisfies Meta<typeof ListBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BottomLeft: Story = {
    args: {
        direction: 'bottom left',
        onChange: fn(),
        value: 'asd',
        items: [
            { value: '123', content: '123' },
            { value: '1234', content: '1234', disabled: true },
            { value: '12345', content: '12345' },
        ],
    },
};

export const BottomRight: Story = {
    args: {
        direction: 'bottom right',
        onChange: fn(),
        value: 'asd',
        items: [
            { value: '123', content: '123' },
            { value: '1234', content: '1234', disabled: true },
            { value: '12345', content: '12345' },
        ],
    },
};

export const TopLeft: Story = {
    args: {
        direction: 'top left',
        onChange: fn(),
        value: 'asd',
        items: [
            { value: '123', content: '123' },
            { value: '1234', content: '1234', disabled: true },
            { value: '12345', content: '12345' },
        ],
    },
};

export const TopRight: Story = {
    args: {
        direction: 'top right',
        onChange: fn(),
        value: 'asd',
        items: [
            { value: '123', content: '123' },
            { value: '1234', content: '1234', disabled: true },
            { value: '12345', content: '12345' },
        ],
    },
};
