import { Decorator } from '@storybook/react-webpack5';
import { Theme, ThemeProvider } from 'app/providers/ThemeProvider';

export const ThemeDecorator =
    (theme: Theme): Decorator => (Story) => 
        (
            <ThemeProvider initialTheme={theme}>
                <div className={`app ${theme}`}>
                    <Story />
                </div>
            </ThemeProvider>
        );
