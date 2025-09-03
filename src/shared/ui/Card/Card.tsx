import * as cls from './Card.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { HTMLAttributes, memo, ReactNode } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    className?: string;
}

export const Card = memo((props: CardProps) => {
    const { className, children, ...otherProps } = props;

    return (
        <div className={classNames(cls.Card, {}, [className])} {...otherProps}>
            {children}
        </div>
    );
});
