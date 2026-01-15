import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { StyckyContentLayout } from './StyckyContentLayout';

const meta = {
    title: 'shared/StyckyContentLayout',
    component: StyckyContentLayout,
} satisfies Meta<typeof StyckyContentLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {

},
};