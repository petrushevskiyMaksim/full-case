import { Decorator } from '@storybook/react-webpack5';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';

export const StoreDecorator =
    (state: Partial<StateSchema>): Decorator => (Story) =>
        (
            <StoreProvider initialState={state}>
                <Story />
            </StoreProvider>
        );
