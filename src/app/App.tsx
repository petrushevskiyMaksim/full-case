import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from './providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { userActions } from 'entities/User';
import { useNavigate } from 'react-router-dom';
// import { Suspense } from 'react';
// import { PageLoader } from 'widgets/PageLoader/ui/PageLoader';

const App = () => {
    const { theme } = useTheme();
    const dispatch = useDispatch();
    

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);

    return (
        <div className={classNames('app', {}, [theme])}>
            {/* <Suspense fallback={<PageLoader />}> */}
            <Navbar />

            <div className='content-page'>
                <Sidebar />
                <AppRouter />
            </div>
            {/* </Suspense> */}
        </div>
    );
};

export default App;
