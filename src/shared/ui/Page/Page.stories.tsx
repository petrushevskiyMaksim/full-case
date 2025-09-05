import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Page } from './Page';

const meta = {
    title: 'shared/Page',
    component: Page,
} satisfies Meta<typeof Page>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {
        children: 'dfasf',
    },
};
