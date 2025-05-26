import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import initApp from 'app/configs/initApp';
import { context } from 'app/constants/Context';
import Moderator from 'app/modules/Moderator';

const ModeratorPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        initApp(context.moderator);
    }, [dispatch]); 
    
    return <Moderator />
};

export default ModeratorPage;