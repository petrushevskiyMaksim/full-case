import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Popover } from './Popover';

const meta = {
    title: 'shared/ListBox',
    component: Popover,
    decorators: [
        (Story) => (
            <div style={{ padding: '100px' }}>
                <Story />
            </div>
        ),
    ],
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BottomLeft: Story = {
    args: {
        children: <div></div>,
        direction: 'bottom left',
    },
};

export const BottomRight: Story = {
    args: {
        direction: 'bottom right',
        children: <div></div>,
    },
};

export const TopLeft: Story = {
    args: {
        direction: 'top left',
        children: <div></div>,
    },
};

export const TopRight: Story = {
    args: {
        direction: 'top right',
        children: <div></div>,
    },
};
