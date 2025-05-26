import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import initApp from 'app/configs/initApp';
import { context } from 'app/constants/Context';
import Login from 'app/modules/Login';

const LoginPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        initApp(context.login);
    }, [dispatch]);

    return <Login />
};

export default LoginPage;