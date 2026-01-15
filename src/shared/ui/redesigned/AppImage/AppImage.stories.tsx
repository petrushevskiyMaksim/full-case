import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { AppImage } from './AppImage';

const meta = {
    title: 'shared/AppImage',
    component: AppImage,
} satisfies Meta<typeof AppImage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {
        src: 'https://image.api.playstation.com/vulcan/img/cfn/11307j6TBTzh7g71otrP_J9tbJwdxhcdmbhtkAuDqYPjhIIwkP3__rOS_rI4g76oypwQ4nvKeCcN5KkAhjF-FRmoeiwp0YjB.png?w=440&thumb=false',
        width: 100,
        height: 100,
    },
};
