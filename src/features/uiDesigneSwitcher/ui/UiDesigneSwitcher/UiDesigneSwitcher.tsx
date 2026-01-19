import { useTranslation } from 'react-i18next';
import { memo, useState } from 'react';
import { ListBox } from '@/shared/ui/redesigned/Popups';
import { getFeatureFlags, updateFeatureFlags } from '@/shared/lib/features';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getUserAuthData } from '@/entities/User';
import { useSelector } from 'react-redux';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';

interface UiDesigneSwitcherProps {
    className?: string;
}

export const UiDesigneSwitcher = memo((props: UiDesigneSwitcherProps) => {
    const { className } = props;
    const { t } = useTranslation('settings');
    const isAppRedesigned = getFeatureFlags('isAppRedesigned');
    const dispatch = useAppDispatch();
    const authData = useSelector(getUserAuthData);
    const [isLoading, setIsLoading] = useState(false);

    const items = [
        {
            content: t('new'),
            value: 'new',
        },
        {
            content: t('old'),
            value: 'old',
        },
    ];

    const onChange = async (value: string) => {
        if (authData) {
            setIsLoading(true);
            await dispatch(
                updateFeatureFlags({
                    userId: authData.id,
                    newFeatures: {
                        isAppRedesigned: value === 'new' ? true : false,
                    },
                })
            ).unwrap();
            setIsLoading(false);
        }
    };

    return (
        <HStack gap='8'>
            <Text text={t('interface option')} />
            {isLoading ? (
                <Skeleton width={120} height={35} />
            ) : (
                <ListBox
                    onChange={onChange}
                    value={isAppRedesigned ? 'new' : 'old'}
                    items={items}
                    className={className}
                />
            )}
        </HStack>
    );
});
