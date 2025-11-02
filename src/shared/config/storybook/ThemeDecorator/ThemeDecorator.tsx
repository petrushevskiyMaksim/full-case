import { ReactRenderer } from '@storybook/react-webpack5';
import { Theme, ThemeProvider } from '@/app/providers/ThemeProvider';
import { DecoratorFunction } from 'storybook/internal/csf';

export const ThemeDecorator =
    (theme: Theme): DecoratorFunction<ReactRenderer, object> => (Story) =>
        (
            <ThemeProvider initialTheme={theme}>
                <div className={`app ${theme}`}>
                    <Story />
                </div>
            </ThemeProvider>
        );
