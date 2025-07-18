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
    };
    config.resolve?.modules?.push(paths.src);
    config.resolve?.extensions?.push('ts', 'tsx');

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
            __API__: JSON.stringify(''),
        })
    );

    return config;
};
