import * as cls from './NotificationButton.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { Popover } from 'shared/ui/Popups';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { NotificationList } from 'entities/Notification';
import { Icon } from 'shared/ui/Icon/Icon';
import NotificationIcon from 'shared/assets/icons/notification-20-20.svg';

interface NotificationButtonProps {
    className?: string;
}

export const NotificationButton = memo((props: NotificationButtonProps) => {
    const { className } = props;

    return (
        <div>
            <Popover
                className={classNames(cls.NotificationButton, {}, [className])}
                direction='bottom left'
                trigger={
                    <Button theme={ButtonTheme.CLEAR}>
                        <Icon Svg={NotificationIcon} inverted />
                    </Button>
                }
            >
                <NotificationList className={cls.notifications} />
            </Popover>
        </div>
    );
});
