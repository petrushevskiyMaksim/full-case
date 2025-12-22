import { ReactRenderer } from '@storybook/react-webpack5';
// eslint-disable-next-line gapone-plugin/layer-imports
import { ThemeProvider } from '@/app/providers/ThemeProvider';
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

export const ThemeSwitcherDecorator = (Story, context) => {
    // 1. Получаем выбранную тему ИЗ ТУЛБАРА
    const themeName = context.globals.theme || 'light';

    // 2. Конвертируем строку в тип Theme
    const theme =
        themeName === 'dark' ? Theme.DARK : themeName === 'violet' ? Theme.VIOLET : Theme.LIGHT;

    // 3. Применяем
    return (
        <ThemeProvider initialTheme={theme}>
            <div className={`app ${theme}`}>
                <Story />
            </div>
        </ThemeProvider>
    );
};
