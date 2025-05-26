import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import initApp from 'app/configs/initApp';
import { context } from 'app/constants/Context';
import Groups from 'app/modules/Groups';

const GroupsPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        initApp(context.groups);
    }, [dispatch]);

   return <Groups />;
};

export default GroupsPage;