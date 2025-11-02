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
            '@/app': path.join(paths.src, 'app'),
            '@/shared': path.join(paths.src, 'shared'),
            '@/entities': path.join(paths.src, 'entities'),
            '@/widgets': path.join(paths.src, 'widgets'),
            '@/features': path.join(paths.src, 'features'),
            '@/pages': path.join(paths.src, 'pages'),
        },
    };

    if (!config.module) config.module = {};
    if (!config.module.rules) config.module.rules = [];

    // config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
    //     if (/svg/.test(rule.test as string)) {
    //         return { ...rule, exclude: /\.svg$/i };
    //     }
    // });

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
// import webpack, { DefinePlugin } from 'webpack';
// import path from 'path';
// import { buildCssLoader } from '../build/loaders/buildCssLoader';

// export default ({ config }: { config: webpack.Configuration }) => {
//     const srcPath = path.resolve(__dirname, '..', '..', 'src');

//     // 1. Явно задаём порядок разрешения модулей
//     config.resolve = {
//         ...(config.resolve || {}),
//         modules: [srcPath, 'node_modules'],
//         extensions: [...(config.resolve?.extensions || []), '.ts', '.tsx'],
//         alias: {
//             ...(config.resolve?.alias || {}),
//             // 2. Явный алиас для entities
//             entities: path.join(srcPath, 'entities'),
//         },
//     };

//     // 3. Обработка SVG (ваш существующий код)
//     const imageRule = config.module?.rules?.find((rule) =>
//         rule?.['test']?.test('.svg')
//     );
//     if (imageRule) {
//         imageRule['exclude'] = /\.svg$/i;
//     }

//     config.module?.rules?.push({
//         test: /\.svg$/,
//         use: ['@svgr/webpack'],
//     });

//     // 4. CSS loader
//     config.module?.rules?.push(buildCssLoader(true));

//     // 5. Глобальные переменные
//     config.plugins?.push(
//         new DefinePlugin({
//             __IS_DEV__: JSON.stringify(true),
//             __API__: JSON.stringify(''),
//             __PROJECT__: JSON.stringify('storybook'),
//         })
//     );

//     return config;
// };
