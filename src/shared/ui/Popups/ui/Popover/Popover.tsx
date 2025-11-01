import {
    Popover as HPopover,
    PopoverButton,
    PopoverPanel,
} from '@headlessui/react';
import * as cls from './Popover.module.scss';
import * as popupCls from '../../styles/popups.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Fragment, ReactNode } from 'react';
import { DropdownDirection } from 'shared/types/ui';
import { mapDirectionClass } from '../../styles/consts';

interface PopoverProps {
    className?: string;
    trigger?: ReactNode;
    direction?: DropdownDirection;
    children: ReactNode;
}

export function Popover(props: PopoverProps) {
    const { className, direction = 'bottom left', trigger, children } = props;

    const menuClasses = [mapDirectionClass[direction]];

    return (
        <HPopover
            className={classNames(cls.Popover, {}, [className, popupCls.popup])}
        >
            <PopoverButton as={Fragment}>
                {/* className={popupCls.trigger} */}
                {trigger}
            </PopoverButton>
            <PopoverPanel className={classNames(cls.panel, {}, menuClasses)}>
                {children}
            </PopoverPanel>
        </HPopover>
    );
}
