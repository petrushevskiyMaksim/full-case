import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { Theme } from '../../../const/theme';

interface UseThemeResult {
    toggleTheme: (saveAction?: (theme: Theme) => void) => void;
    theme: Theme;
}

export const useTheme = (): UseThemeResult => {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = (saveAction?: (theme: Theme) => void) => {
        let newTheme: Theme;

        // prettier-ignore
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
        // document.body.className = newTheme;
        saveAction?.(newTheme);
    };

    return {
        toggleTheme: toggleTheme,
        theme: theme || Theme.LIGHT,
    };
};
