import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { classNames } from '../../lib/classNames/classNames';
import { Fragment } from 'react/jsx-runtime';

import * as cls from './Dropdown.module.scss';
import { Button, ButtonTheme } from '../Button/Button';
import { ReactNode } from 'react';
import { DropdownDirection } from 'shared/types/ui';
import { href } from 'react-router-dom';
import { AppLink } from '../AppLink/AppLink';

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

const mapDirectionClass: Record<DropdownDirection, string> = {
    'bottom left': cls.optionsBottomLeft,
    'bottom right': cls.optionsBottomRight,
    'top left': cls.optionsTopLeft,
    'top right': cls.optionsTopRight,
};

export function Dropdown(props: DropdownProps) {
    const { className, items, trigger, direction = 'bottom right' } = props;

    const menuClasses = [mapDirectionClass[direction]];

    return (
        <Menu as={'div'} className={classNames(cls.Dropdown, {}, [className])}>
            <MenuButton className={cls.btn}>
                {trigger ? trigger : 'Menu'}
                {/* {({ active }) => (
                    <Button
                        theme={
                            active
                                ? ButtonTheme.BACKGROUND_INVERTED
                                : ButtonTheme.CLEAR
                        }
                        className={classNames(
                            cls.btn,
                            {
                                [cls.active]: active,
                            },
                            []
                        )}
                    >
                        {'My account'}
                    </Button>
                )} */}
            </MenuButton>
            <MenuItems
                className={classNames(cls.menu, {}, menuClasses)}
                portal={false}
            >
                {items.map((item, index) => {
                    const context = (item, focus) => {
                        return (
                            <button
                                // key={item.content}
                                type='button'
                                disabled={item.disabled}
                                onClick={item.onClick}
                                className={classNames(
                                    cls.item,
                                    { [cls.focus]: focus },
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
                                key={index}
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
                            key={index}
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
