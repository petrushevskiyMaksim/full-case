import * as cls from './ListBox.module.scss';
import {
    Field,
    Listbox as HListBox,
    Label,
    ListboxButton,
    ListboxOption,
    ListboxOptions,
} from '@headlessui/react';
import { Fragment, ReactNode, useEffect, useRef, useState } from 'react';
import { CheckIcon } from '@heroicons/react/20/solid';
import { classNames } from '../../lib/classNames/classNames';
import { HStack } from '../Stack';
import { Button } from '../Button/Button';

export interface ListBoxItem {
    value: string;
    content: ReactNode;
    disabled?: boolean;
}

interface ListBoxProps {
    items?: ListBoxItem[];
    className?: string;
    value?: string;
    defaultValue?: string;
    onChange: (value: string) => void;
    readonly?: boolean;
    label?: string;
}

export function ListBox(props: ListBoxProps) {
    const { className, items, value, defaultValue, onChange, readonly, label } =
        props;
    const triggerRef = useRef<HTMLButtonElement>(null);
    const [width, setWidth] = useState<number>(0);

    useEffect(() => {
        if (triggerRef.current) {
            setWidth(triggerRef.current.offsetWidth);
        }
    }, []);

    return (
        <Field className={cls.listboxWrapper}>
            {label && <Label className={cls.label}>{`${label} >`}</Label>}
            <HListBox
                className={classNames(cls.ListBox, {}, [className])}
                as={'div'}
                value={value}
                onChange={onChange}
                disabled={readonly}
            >
                <ListboxButton
                    disabled={readonly}
                    ref={triggerRef}
                    as={Fragment}
                >
                    <Button disabled={readonly}>{value ?? defaultValue}</Button>
                </ListboxButton>
                <ListboxOptions
                    className={cls.options}
                    style={{ width }}
                    anchor={{ to: 'bottom start' }}
                >
                    {items?.map((item) => (
                        <ListboxOption
                            as={Fragment}
                            key={item.value}
                            value={item.value}
                            disabled={item.disabled}
                        >
                            {({ focus, selected }) => (
                                <li
                                    className={classNames(
                                        cls.item,
                                        {
                                            [cls.focus]: focus,
                                            [cls.disabled]: item.disabled,
                                        },
                                        []
                                    )}
                                >
                                    <HStack align='center' gap='4'>
                                        {item.content}
                                        {selected && (
                                            <CheckIcon className={cls.icon} />
                                        )}
                                    </HStack>
                                </li>
                            )}
                        </ListboxOption>
                    ))}
                </ListboxOptions>
            </HListBox>
        </Field>
    );
}
