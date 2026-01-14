import { classNames } from '@/shared/lib/classNames/classNames';
import * as cls from './AppLink.module.scss';
import { LinkProps } from 'react-router-dom';
import { FC, memo, ReactNode } from 'react';
import { NavLink } from 'react-router-dom';

export type AppLinkVariant = 'primary' | 'red';

interface AppLinkProps extends LinkProps {
    className?: string;
    children: ReactNode;
    variant?: AppLinkVariant;
    activeClassName?: string;
}

export const AppLink: FC<AppLinkProps> = memo((props) => {
    const {
        to,
        children,
        className,
        variant = 'primary',
        activeClassName = '',
        ...otherProps
    } = props;

    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                classNames('', { [activeClassName]: isActive }, [
                    className,
                    cls[variant],
                ])
            }
            {...otherProps}
        >
            {children}
        </NavLink>
    );
});
