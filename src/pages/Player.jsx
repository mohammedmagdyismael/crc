import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import initApp from 'app/configs/initApp';
import { context } from 'app/constants/Context';
import Player from 'app/modules/Player';


const PlayerPage = () => {
    const dispatch = useDispatch();
    
    useEffect(() => {
        initApp(context.player);
    }, [dispatch]);

    return <Player />
};

export default PlayerPage;