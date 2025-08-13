import { useContext } from 'react';
import { LOCAL_STORAGE_THEM_KEY, Theme, ThemeContext } from './ThemeContext';

interface UseThemeResult {
    toggleTheme: () => void;
    theme: Theme;
}

export const useTheme = (): UseThemeResult => {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = () => {
        let newTheme: Theme;

        switch (theme) {
        case Theme.DARK:
            newTheme = Theme.LIGHT;
            break;
        case Theme.LIGHT:
            newTheme = Theme.VIOLET;
            break;
        case Theme.VIOLET:
            newTheme = Theme.DARK;
            break;

        default:
            newTheme = Theme.LIGHT;
        }

        setTheme?.(newTheme);
        document.body.className = newTheme;
        localStorage.setItem(LOCAL_STORAGE_THEM_KEY, newTheme);
    };

    return {
        toggleTheme: toggleTheme,
        theme: theme || Theme.LIGHT,
    };
};
