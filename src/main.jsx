import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from 'app/theme/globalStyles';
import themeData from 'app/theme/themeData';

import store from 'app/store/store';
import App from './App'
import './index.css'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <ThemeProvider theme={themeData}>
    </ThemeProvider>
    <GlobalStyles />
    <App />
  </Provider>,
)
