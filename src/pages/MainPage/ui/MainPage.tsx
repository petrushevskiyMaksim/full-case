import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page/Page';

export default memo(function MainPage() {
    const { t } = useTranslation('main');

    return <Page>{t('Главная страница')}</Page>;
});
