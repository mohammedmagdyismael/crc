import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import initApp from 'app/configs/initApp';
import { context } from 'app/constants/Context';
import Landing from 'app/modules/Landing';

const LandingPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        initApp(context.landing);
    }, [dispatch]);

    return <Landing />
};

export default LandingPage;