import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { NotificationList } from './NotificationList';

const meta = {
    title: 'shared/NotificationList',
    component: NotificationList,
} satisfies Meta<typeof NotificationList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {},
};
