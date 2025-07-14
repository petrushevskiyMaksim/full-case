import { ReducersMapObject } from '@reduxjs/toolkit';
import { Decorator } from '@storybook/react-webpack5';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';

const defaultAsyncReducers: Partial<ReducersMapObject<StateSchema>> = {
    loginForm: loginReducer,
};

export const StoreDecorator =
    (
        state: Partial<StateSchema>,
        asyncReducers?: Partial<ReducersMapObject<StateSchema>>
    ): Decorator => (Story) =>
        (
            <StoreProvider
                initialState={state}
                asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
            >
                <Story />
            </StoreProvider>
        );
