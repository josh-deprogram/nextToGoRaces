import React from 'react';
import {Provider} from 'react-redux';
import {store} from './state';
import App from './App';

function AppContainer(): React.JSX.Element {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

export default AppContainer;
