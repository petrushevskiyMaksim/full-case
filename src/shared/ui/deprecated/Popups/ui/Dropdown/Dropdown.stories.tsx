import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Dropdown } from './Dropdown';

const meta = {
    title: 'shared/Dropdown',
    component: Dropdown,
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {
        items: [
            { href: '/settings', content: 'Settings' },
            { href: '/support', content: 'Support' },
            { href: '/license', content: 'License' },
        ],
    },
};
