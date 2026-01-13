export { UserRole } from './model/consts/consts';
export type { User, UserSchema } from './model/types/user';
export { userActions, userReducer } from './model/slice/userSlice';
export { getUserAuthData } from './model/selectors/getUserAuthData/getUserAuthData';
export { getUserInited } from './model/selectors/getUserInited/getUserInited';
export {
    isUserAdmin,
    isUserManager,
    getUserRoles,
} from './model/selectors/roleSelectors';
export {
    // getJsonSettingByKey,
    // getJsonSettings,
    useJsonSettingByKey,
    useJsonSettings,
} from './model/selectors/jsonSettings';
export { saveJsonSettings } from './model/services/saveJsonSettings';
