import * as cls from './Card.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { HTMLAttributes, memo, ReactNode } from 'react';

export type CardVariant = 'normal' | 'outlined' | 'light';
export type CardPadding = '0' | '8' | '16' | '24';
export type CardBorder = 'roundBorder' | 'normalBorder';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    className?: string;
    variant?: CardVariant;
    max?: boolean;
    padding?: CardPadding;
    border?: CardBorder;
}

const mapPaddingToClass: Record<CardPadding, string> = {
    '0': 'gap_0',
    '8': 'gap_8',
    '16': 'gap_16',
    '24': 'gap_24',
};

export const Card = memo((props: CardProps) => {
    const {
        className,
        children,
        max,
        variant = 'normal',
        padding = '8',
        border = 'normalBorder',
        ...otherProps
    } = props;

    const paddingsClass = mapPaddingToClass[padding];

    return (
        <div
            className={classNames(cls.Card, { [cls.max]: max }, [
                className,
                cls[variant],
                cls[paddingsClass],
                cls[border],
            ])}
            {...otherProps}
        >
            {children}
        </div>
    );
});
