import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { Fragment } from 'react/jsx-runtime';
import * as cls from './Dropdown.module.scss';
import { ReactNode } from 'react';
import { DropdownDirection } from '@/shared/types/ui';
import { AppLink } from '../../../AppLink/AppLink';
import { classNames } from '@/shared/lib/classNames/classNames';
import { mapDirectionClass } from '../../styles/consts';
import * as popupCls from '../../styles/popups.module.scss';

export interface DropdownItem {
    disabled?: boolean;
    content?: ReactNode;
    onClick?: () => void;
    href?: string;
}

interface DropdownProps {
    className?: string;
    items: DropdownItem[];
    trigger?: ReactNode;
    direction?: DropdownDirection;
}

/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */
export function Dropdown(props: DropdownProps) {
    const { className, items, trigger, direction = 'bottom right' } = props;

    const menuClasses = [mapDirectionClass[direction]];

    return (
        <Menu
            as={'div'}
            className={classNames('', {}, [className, popupCls.popup])}
        >
            <MenuButton className={cls.trigger}>
                {trigger ? trigger : 'Menu'}
            </MenuButton>
            <MenuItems
                className={classNames(cls.menu, {}, menuClasses)}
                portal={false}
            >
                {items.map((item, index) => {
                    const context = (item, focus) => {
                        return (
                            <button
                                type='button'
                                disabled={item.disabled}
                                onClick={item.onClick}
                                className={classNames(
                                    cls.item,
                                    { [popupCls.focus]: focus },
                                    []
                                )}
                            >
                                {item.content}
                            </button>
                        );
                    };

                    if (item.href) {
                        return (
                            <MenuItem
                                key={`dropdown-key-` + index}
                                as={AppLink}
                                to={item.href}
                                disabled={item.disabled}
                            >
                                {({ focus }) => context(item, focus)}
                            </MenuItem>
                        );
                    }

                    return (
                        <MenuItem
                            key={`dropdown-key-` + index}
                            as={Fragment}
                            disabled={item.disabled}
                        >
                            {({ focus }) => context(item, focus)}
                        </MenuItem>
                    );
                })}
            </MenuItems>
        </Menu>
    );
}
