import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { Dropdown } from 'shared/ui/Popups';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import {
    getUserAuthData,
    isUserAdmin,
    isUserManager,
    userActions,
} from 'entities/User';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

interface AvatarDropdownProps {
    className?: string;
}

export const AvatarDropdown = memo((props: AvatarDropdownProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const isAdmin = useSelector(isUserAdmin);
    const isManager = useSelector(isUserManager);
    const authData = useSelector(getUserAuthData);

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    const isAdminPanelAvailable = isAdmin || isManager;

    const items = [
        ...(isAdminPanelAvailable
            ? [{ content: t('Админка'), href: RoutePath.admin_panel }]
            : []),

        { content: t('Профиль'), href: RoutePath.profile + authData?.id },

        { content: t('Выйти'), onClick: onLogout },
    ];

    if (!authData) {
        return null;
    }

    return (
        <Dropdown
            className={classNames('', {}, [className])}
            direction='bottom left'
            items={items}
            trigger={<Avatar size={30} src={authData.avatar} />}
        />
    );
});
