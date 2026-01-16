import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { Country } from '../../model/types/country';
import { ListBox as ListBoxDeprecated } from '@/shared/ui/deprecated/Popups';
import { ToggleFeatures } from '@/shared/lib/features';
import { ListBox } from '@/shared/ui/redesigned/Popups';

interface CountrySelectProps {
    className?: string;
    value?: Country;
    onChange?: (value: Country) => void;
    readonly?: boolean;
}

const options = [
    { value: Country.Russia, content: Country.Russia },
    { value: Country.Belarus, content: Country.Belarus },
    { value: Country.Ukrain, content: Country.Ukrain },
];

export const CountrySelect = memo((props: CountrySelectProps) => {
    const { className, value, onChange, readonly } = props;

    const { t } = useTranslation('profile');

    const onChangeHandler = useCallback(
        (value: string) => {
            onChange?.(value as Country);
        },
        [onChange]
    );

    const commonProps = {
        className: classNames('', {}, [className]),
        value: value,
        items: options,
        label: t('select country'),
        defaultValue: t('select country'),
        onChange: onChangeHandler,
        readonly: readonly,
        direction: 'top left' as const,
    };

    return (
        <ToggleFeatures
            feature='isAppRedesigned'
            on={<ListBox {...commonProps} />}
            off={<ListBoxDeprecated {...commonProps}></ListBoxDeprecated>}
        />
    );
});
