import { classNames } from 'shared/lib/classNames/classNames';
import * as cls from './AppLink.module.scss';
import { Link, LinkProps } from 'react-router-dom';
import { FC, memo, ReactNode } from 'react';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    INVERTED = 'inverted',
    RED = 'red',
}

interface AppLinkProps extends LinkProps {
    className?: string;
    children: ReactNode;
    theme?: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = memo((props) => {
    const {
        to,
        children,
        className,
        theme = AppLinkTheme.PRIMARY,
        ...otherProps
    } = props;

    return (
        <Link
            to={to}
            className={classNames(cls.AppLink, {}, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </Link>
    );
});
