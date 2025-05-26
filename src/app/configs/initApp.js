import { setContext } from 'app/modules/common/slice';

import store from 'app/store/store';

const initApp = context => {
  store.dispatch(setContext(context));
};

export default initApp;
