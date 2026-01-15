import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { ViewSelectorConteiner } from './ViewSelectorConteiner';

const meta = {
    title: 'shared/ViewSelectorConteiner',
    component: ViewSelectorConteiner,
} satisfies Meta<typeof ViewSelectorConteiner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {},
};
