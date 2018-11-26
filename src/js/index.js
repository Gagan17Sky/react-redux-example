import React from 'react';

import { Provider } from 'react-redux';
import configureStore from './configureStore/index';
import App from "./components/App";

const store = configureStore()

render(
  <Provider store={store}>
  <App/>
  </Provider>,
  document.getElementById('app')
);
