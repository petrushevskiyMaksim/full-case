import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Modal } from './Modal';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'shared/Modal',
    component: Modal,
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
    args: {
        isOpen: true,
        children:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit.Quisquam voluptatibus magnam unde nesciunt porro nihil atquevoluptatem ratione alias est, facere at esse odio nobis temporeaspernatur dignissimos autem earum maiores nam officiis pariaturveniam voluptas. At qui consectetur provident inventore neque?                Minus doloribus magnam saepe quidem culpa libero obcaecatisuscipit, officiis aperiam corporis voluptate illum explicaboeius consectetur nihil, possimus ipsam incidunt. Cumque aperiamad, omnis pariatur, aut voluptates atque illum a corrupti veniamesse accusantium amet. Dolore qui optio modi provident,recusandae officia laboriosam tenetur vero totam repellat,asperiores eveniet veniam beatae deserunt debitis labore nemocupiditate odit.',
    },
};

export const Dark: Story = {
    args: {
        isOpen: true,
        children:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit.Quisquam voluptatibus magnam unde nesciunt porro nihil atquevoluptatem ratione alias est, facere at esse odio nobis temporeaspernatur dignissimos autem earum maiores nam officiis pariaturveniam voluptas. At qui consectetur provident inventore neque?                Minus doloribus magnam saepe quidem culpa libero obcaecatisuscipit, officiis aperiam corporis voluptate illum explicaboeius consectetur nihil, possimus ipsam incidunt. Cumque aperiamad, omnis pariatur, aut voluptates atque illum a corrupti veniamesse accusantium amet. Dolore qui optio modi provident,recusandae officia laboriosam tenetur vero totam repellat,asperiores eveniet veniam beatae deserunt debitis labore nemocupiditate odit.',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
