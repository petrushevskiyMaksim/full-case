import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Page } from '@/widgets/Page';

export default memo(function AboutPage() {
    const { t } = useTranslation('about');

    return <Page data-testid={'AboutPage'}>{t('О сайте')}</Page>;
});
