import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { ArticlesFilters } from './ArticlesFilters';

const meta = {
    title: 'shared/ArticlesFilters',
    component: ArticlesFilters,
} satisfies Meta<typeof ArticlesFilters>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {

},
};