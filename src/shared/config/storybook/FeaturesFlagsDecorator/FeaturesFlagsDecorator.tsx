import { setFeatureFlags } from '@/shared/lib/features';
import { FeatureFlags } from '@/shared/types/featureFlags';
import { Decorator } from '@storybook/react-webpack5';

// export const FeaturesFlagsDecorator =
//     //prettier-ignore
//     (features: FeatureFlags): Decorator => (Story) => {
//         setFeatureFlags(features);

//         return <Story />;
//     };
export const FeaturesFlagsDecorator = (features: FeatureFlags): Decorator => {
    const decorator: Decorator = (Story) => {
        setFeatureFlags(features);
        return Story();
    };
    return decorator;
};
