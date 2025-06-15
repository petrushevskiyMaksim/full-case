import { classNames } from 'shared/lib/classNames/classNames';
import * as cls from './Navbar.module.scss';
import { AppLink } from 'shared/ui';
import { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink
                    theme={AppLinkTheme.INVERTED}
                    to={'/'}
                    className={cls.mainLink}
                >
                    {t('Home')}
                </AppLink>
                <AppLink theme={AppLinkTheme.INVERTED} to={'/about'}>
                    {t('About')}
                </AppLink>
            </div>
        </div>
    );
};
