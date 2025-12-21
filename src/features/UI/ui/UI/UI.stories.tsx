import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { UI } from './UI';

const meta = {
    title: 'features/UI',
    component: UI,
} satisfies Meta<typeof UI>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {},
};
