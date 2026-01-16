import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import {
    Button as ButtonDeprecated,
    ButtonTheme,
} from '@/shared/ui/deprecated/Button';
import { memo, useCallback } from 'react';
import { ToggleFeatures } from '@/shared/lib/features';
import { Button } from '@/shared/ui/redesigned/Button';

interface LangSwitcherProps {
    className?: string;
    short?: boolean;
}

export const LangSwitcher = memo(({ className, short }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();

    // const toggle = () => {
    //     i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    // };
    const toggle = useCallback(async () => {
        try {
            await i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
        } catch (error) {
            console.error('Failed to change language:', error);
        }
    }, [i18n]);

    return (
        <ToggleFeatures
            feature='isAppRedesigned'
            on={
                <Button variant={'clear'} onClick={toggle}>
                    {t(short ? 'Короткий язык' : 'Язык')}
                </Button>
            }
            off={
                <ButtonDeprecated
                    className={classNames('', {}, [className])}
                    theme={ButtonTheme.CLEAR}
                    onClick={toggle}
                >
                    <p style={{ color: 'var(--inverted-primary-color)' }}>
                        {t(short ? 'Короткий язык' : 'Язык')}
                    </p>
                </ButtonDeprecated>
            }
        />
    );
});
