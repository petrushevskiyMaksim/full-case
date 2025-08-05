import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Select } from './Select';

const meta = {
    title: 'shared/Select',
    component: Select,
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        label: 'Label',
        options: [
            { value: '123', content: 'Первый пункт' },
            { value: '1234', content: 'Второй пункт' },
            { value: '12345', content: 'Третий пункт' },
        ],
    },
};
