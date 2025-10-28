import { Decorator } from '@storybook/react-webpack5';
import { Suspense } from 'react';

export const SuspenseDecorator: Decorator = (Story) => {
    return (
        <Suspense fallback={'...Loading'}>
            <Story />
        </Suspense>
    );
};
