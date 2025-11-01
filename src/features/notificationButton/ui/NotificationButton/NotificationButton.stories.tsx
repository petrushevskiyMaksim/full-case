import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { NotificationButton } from './NotificationButton';

const meta = {
    title: 'shared/NotificationButton',
    component: NotificationButton,
} satisfies Meta<typeof NotificationButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {},
};
