import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { RatingCard } from './RatingCard';

const meta = {
    title: 'shared/RatingCard',
    component: RatingCard,
} satisfies Meta<typeof RatingCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {

},
};