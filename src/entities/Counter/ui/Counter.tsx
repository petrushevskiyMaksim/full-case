import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'shared/ui/Button/Button';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { counterActions } from '../model/slice/counterSlice';
import { useTranslation } from 'react-i18next';

export const Counter = () => {
    const dispatch = useDispatch();
    const counterValue = useSelector(getCounterValue);
    const { t } = useTranslation();

    const increment = () => {
        console.log('increment');
        dispatch(counterActions.increment());
    };

    const decrement = () => {
        console.log('decrement');
        dispatch(counterActions.decrement());
    };
    return (
        <div>
            <h1 data-testid='value-title'>{counterValue}</h1>
            <Button data-testid='increment-btn' onClick={increment}>
                {t('increment')}
            </Button>
            <Button data-testid='decrement-btn' onClick={decrement}>
                {t('decrement')}
            </Button>
        </div>
    );
};
