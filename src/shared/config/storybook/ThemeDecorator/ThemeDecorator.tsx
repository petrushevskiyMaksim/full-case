import { ReactRenderer } from '@storybook/react-webpack5';
// eslint-disable-next-line gapone-plugin/layer-imports
import {  ThemeProvider } from '@/app/providers/ThemeProvider';
import { DecoratorFunction } from 'storybook/internal/csf';
import { Theme } from '@/shared/const/theme';

export const ThemeDecorator =
    (theme: Theme): DecoratorFunction<ReactRenderer, object> => (Story) =>
        (
            <ThemeProvider initialTheme={theme}>
                <div className={`app ${theme}`}>
                    <Story />
                </div>
            </ThemeProvider>
        );
