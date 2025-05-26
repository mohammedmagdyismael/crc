import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import initApp from 'app/configs/initApp';
import { context } from 'app/constants/Context';
import Knockouts from 'app/modules/Knockouts';

const KnockoutsPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        initApp(context.knockouts);
    }, [dispatch]);

    return <Knockouts />
};

export default KnockoutsPage;