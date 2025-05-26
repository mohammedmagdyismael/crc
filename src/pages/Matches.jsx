import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import initApp from 'app/configs/initApp';
import { context } from 'app/constants/Context';
import Matches from 'app/modules/Matches';

const MatchesPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        initApp(context.matches);
    }, [dispatch]);

    return <Matches />
};

export default MatchesPage;