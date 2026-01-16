import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { ProfileCardRedesigned } from './ProfileCardRedesigned';

const meta = {
    title: 'shared/ProfileCardRedesigned',
    component: ProfileCardRedesigned,
} satisfies Meta<typeof ProfileCardRedesigned>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {

},
};