import type { Preview } from '@storybook/react-webpack5';
import StyleDecorator from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator';
import { Theme } from '../../src/app/providers/ThemeProvider/lib/ThemeContext';
import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { RouterDecorator } from '../../src/shared/config/storybook/RouterDecorator/RouterDecorator';
import { StoreDecorator } from '../../src/shared/config/storybook/StoreDecorator/StoreDecorator';
import { SuspenseDecorator } from '../../src/shared/config/storybook/SuspenseDecorator/SuspenseDecorator';
import { initialize, mswLoader } from 'msw-storybook-addon';

initialize();

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
    decorators: [
        StyleDecorator,
        ThemeDecorator(Theme.LIGHT),
        RouterDecorator,
        StoreDecorator(),
        SuspenseDecorator,
    ],
    loaders: [mswLoader],
};

export default preview;
