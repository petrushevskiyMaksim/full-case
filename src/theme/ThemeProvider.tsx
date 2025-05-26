import { FC, ReactNode, useMemo, useState } from 'react';
import { LOCAL_STORAGE_THEM_KEY, Theme, ThemeContext } from './ThemeContext';

const defaultTheme =
    (localStorage.getItem(LOCAL_STORAGE_THEM_KEY) as Theme) || Theme.LIGHT;

interface ThemeProviderProps {
    children: ReactNode; // Явно указываем тип children
}

const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
    const [theme, setTheme] = useState<Theme>(defaultTheme);

    const defaultProps = useMemo(
        () => ({
            theme: theme,
            setTheme: setTheme,
        }),
        [theme]
    );

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
