import webpack, { DefinePlugin } from 'webpack';
import { BuildPaths } from '../build/types/config';
import path from 'path';
import { buildCssLoader } from '../build/loaders/buildCssLoader';

export default ({ config }: { config: webpack.Configuration }) => {
    const paths: BuildPaths = {
        build: '',
        entry: '',
        html: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
        locales: '',
        buildLocales: '',
    };

    // 1. Критическое изменение - устанавливаем приоритет src
    config.resolve = {
        ...(config.resolve || {}),
        modules: [paths.src, ...(config.resolve?.modules || [])], // src теперь первый
        extensions: [...(config.resolve?.extensions || []), '.ts', '.tsx'],
        alias: {
            ...(config.resolve?.alias || {}),
            '@': paths.src,
            // '@/app': path.join(paths.src, 'app'),
            // '@/shared': path.join(paths.src, 'shared'),
            // '@/entities': path.join(paths.src, 'entities'),
            // '@/widgets': path.join(paths.src, 'widgets'),
            // '@/features': path.join(paths.src, 'features'),
            // '@/pages': path.join(paths.src, 'pages'),
        },
    };

    if (!config.module) config.module = {};
    if (!config.module.rules) config.module.rules = [];

    const imageRule = config.module.rules.find((rule) =>
        rule?.['test']?.test('.svg')
    );
    if (imageRule) {
        imageRule['exclude'] = /\.svg$/i;
    }

    config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    });

    config.module?.rules?.push(buildCssLoader(true));

    config.plugins?.push(
        new DefinePlugin({
            __IS_DEV__: JSON.stringify(true),
            __API__: JSON.stringify('https://testapi.ru'),
            __PROJECT__: JSON.stringify('storybook'),
        })
    );

    return config;
};
