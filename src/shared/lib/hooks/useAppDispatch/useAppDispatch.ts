// eslint-disable-next-line gapone-plugin/layer-imports
import { AppDispatch } from '@/app/providers/StoreProvider/';
import { useDispatch } from 'react-redux';

export const useAppDispatch = () => useDispatch<AppDispatch>();
