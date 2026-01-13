import { classNames } from '@/shared/lib/classNames/classNames';
import { ButtonHTMLAttributes, FC, memo, useCallback } from 'react';
import DarkIcon from '@/shared/assets/icons/theme-dark.svg';
import LightIcon from '@/shared/assets/icons/theme-light.svg';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { Theme } from '@/shared/const/theme';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { saveJsonSettings } from '@/entities/User';

interface ThemeSwitcherProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = memo((props) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { className, children, ...otherProps } = props;
    const { theme, toggleTheme } = useTheme();
    const dispatch = useAppDispatch();

    const onToggleHandler = useCallback(() => {
        toggleTheme((newTheme) => {
            dispatch(
                saveJsonSettings({
                    theme: newTheme,
                })
            );
            console.log(`Тема сменилась на ${newTheme}`);
        });
    }, [toggleTheme, dispatch]);

    return (
        <Button
            theme={ButtonTheme.CLEAR}
            className={classNames('', {}, [className])}
            onClick={onToggleHandler}
        >
            {theme === Theme.DARK ? (
                <DarkIcon width={'40px'} height={'40px'} viewBox='0 0 24 24' />
            ) : (
                <LightIcon width={'40px'} height={'40px'} viewBox='0 0 24 24' />
            )}
        </Button>
    );
});
