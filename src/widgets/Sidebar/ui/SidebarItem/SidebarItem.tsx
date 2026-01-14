import { SidebarItemType } from '../../model/types/sidebar';
import * as cls from './SidebarItem.module.scss';
import { useTranslation } from 'react-i18next';
import { AppLink } from '@/shared/ui/deprecated/AppLink';
import { memo } from 'react';
import { classNames } from '../../../../shared/lib/classNames/classNames';
import { useSelector } from 'react-redux';
import { getUserAuthData } from '../../../../entities/User';
import { AppLinkTheme } from '@/shared/ui/deprecated/AppLink/AppLink';

interface SidebarItemProps {
    item: SidebarItemType;
    collapsed: boolean;
}

export const SidebarItem = memo(({ item, collapsed }: SidebarItemProps) => {
    const { t } = useTranslation();
    const isAuth = useSelector(getUserAuthData);

    if (item.authOnly && !isAuth) {
        return null;
    }

    return (
        <AppLink
            theme={AppLinkTheme.INVERTED}
            to={item.path}
            className={classNames(cls.item, { [cls.collapsed]: collapsed })}
        >
            <item.Icon className={cls.icon} />
            <span className={cls.link}>{t(item.text)}</span>
        </AppLink>
    );
});
