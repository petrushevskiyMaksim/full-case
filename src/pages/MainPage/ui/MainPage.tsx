import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { ListBox } from 'shared/ui/ListBox/ListBox';
import { HStack } from 'shared/ui/Stack';
import { Page } from 'widgets/Page/Page';

export default memo(function MainPage() {
    const { t } = useTranslation('main');

    return (
        <Page>
            {t('Главная страница')}
            <div>{'agasg'}</div>
            <div>{'agasg'}</div>
            <HStack>
                <div>{'agasg'}</div>
                <ListBox
                    defaultValue={t('Выберете значение')}
                    value={undefined}
                    onChange={() => {}}
                    items={[
                        { value: '123', content: '123' },
                        { value: '1234', content: '1234', disabled: true },
                        { value: '12345', content: '12345' },
                    ]}
                />
            </HStack>
            <div>{'agasg'}</div>
            <div>{'agasg'}</div>
            <div>{'agasg'}</div>
            <div>{'agasg'}</div>
        </Page>
    );
});
