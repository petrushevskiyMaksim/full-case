import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { LOCAL_STORAGE_THEM_KEY } from '../../../const/localStorage';
import { Theme } from '../../../const/theme';

interface UseThemeResult {
    toggleTheme: () => void;
    theme: Theme;
}

export const useTheme = (): UseThemeResult => {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = () => {
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
        document.body.className = newTheme;
        localStorage.setItem(LOCAL_STORAGE_THEM_KEY, newTheme);
    };

    return {
        toggleTheme: toggleTheme,
        theme: theme || Theme.LIGHT,
    };
};
