import type { Meta, StoryObj } from '@storybook/react-webpack5';
import SettingsPage from './SettingsPage';

const meta = {
    title: 'pages/SettingsPage',
    component: SettingsPage,
} satisfies Meta<typeof SettingsPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {},
};
