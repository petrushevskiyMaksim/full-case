import { Decorator } from '@storybook/react-webpack5';
import { BrowserRouter } from 'react-router-dom';

export const RouterDecorator: Decorator = (Story) => {
    return (
        <BrowserRouter>
            <Story />
        </BrowserRouter>
    );
};
