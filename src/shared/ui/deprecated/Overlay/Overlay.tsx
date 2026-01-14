import * as cls from './Overlay.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';

interface OverlayProps {
    className?: string;
    onClick?: () => void;
}

/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */
export const Overlay = memo((props: OverlayProps) => {
    const { className, onClick } = props;

    return (
        <div
            onClick={onClick}
            className={classNames(cls.Overlay, {}, [className])}
        ></div>
    );
});
