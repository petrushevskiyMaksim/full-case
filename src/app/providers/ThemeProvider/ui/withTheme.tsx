import { useJsonSettings } from '@/entities/User';
import ThemeProvider from './ThemeProvider';

export const withTheme = (Component: React.ComponentType) => {
    return () => {
        const { theme: defaltTheme } = useJsonSettings();
        return (
            <ThemeProvider initialTheme={defaltTheme}>
                <Component />
            </ThemeProvider>
        );
    };
};
