import { classNames } from 'shared/lib/classNames/classNames';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import { ButtonHTMLAttributes, FC } from 'react';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

interface ThemeSwitcherProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = (props) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { className, children, ...otherProps } = props;
    const { theme, toggleTheme } = useTheme();

    return (
        <Button
            theme={ButtonTheme.CLEAR}
            className={classNames('', {}, [className])}
            onClick={toggleTheme}
        >
            {theme === Theme.DARK ? (
                <DarkIcon width={'40px'} height={'40px'} viewBox='0 0 24 24' />
            ) : (
                <LightIcon width={'40px'} height={'40px'} viewBox='0 0 24 24' />
            )}
        </Button>
    );
};
