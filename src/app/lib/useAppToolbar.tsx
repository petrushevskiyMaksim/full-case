import { AppRoutes } from '@/shared/const/router';
import { useRouterChange } from '@/shared/lib/router/useRouterChange';
import { ScrollToolbar } from '@/widgets/ScrollToolbar';
import { ReactElement } from 'react';

export function useAppToolbar() {
    const appRoute = useRouterChange();

    const toolbarByAppRoute: OptionalRecord<AppRoutes, ReactElement> = {
        [AppRoutes.ARTICLES]: <ScrollToolbar />,
        [AppRoutes.ARTICLES_DETAILS]: <ScrollToolbar />,
        [AppRoutes.MAIN]: <div>{'MAIN'}</div>,
        [AppRoutes.ABOUT]: <div>{'ABOUT'}</div>,
    };

    return toolbarByAppRoute[appRoute];
}
