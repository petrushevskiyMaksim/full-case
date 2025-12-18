import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { NotificationItem } from './NotificationItem';

const meta = {
    title: 'entities/Notification/NotificationItem',
    component: NotificationItem,
} satisfies Meta<typeof NotificationItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {
        item: {
            description: 'afasg',
            heading: 'agagag',
            id: '1',
        },
    },
};
