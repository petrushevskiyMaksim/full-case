import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { FiltersContainer } from './FiltersContainer';

const meta = {
    title: 'shared/FiltersContainer',
    component: FiltersContainer,
} satisfies Meta<typeof FiltersContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {

},
};