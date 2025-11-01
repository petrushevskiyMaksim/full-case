import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Popover } from './Popover';
// import { Button, ButtonTheme } from '../../../Button/Button';
// import { Icon } from '../../../Icon/Icon';
// import NotificationIcon from 'shared/assets/icons/notification-20-20.svg';

const meta = {
    title: 'shared/Popover',
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
        children: <span>{'popover'}</span>,
        direction: 'bottom left',
    },
};

export const BottomRight: Story = {
    args: {
        direction: 'bottom right',
        children: <span>{'popover'}</span>,
    },
};

export const TopLeft: Story = {
    args: {
        direction: 'top left',
        children: <span>{'popover'}</span>,
    },
};

export const TopRight: Story = {
    args: {
        direction: 'top right',
        children: <span>{'popover'}</span>,
    },
};
