import React from 'react';

import { Provider as StoreProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import configureReduxStore from './configs/Store';

import AppContainer from './routes';
import navigationUtil from './utils/navigationUtil';

const { store, persistor } = configureReduxStore();

function App() {
  return (
    <StoreProvider store={store}>
      <PersistGate persistor={persistor}>
        <AppContainer ref={navigatorRef => navigationUtil.setTopLevelNavigator(navigatorRef)} />
      </PersistGate>
    </StoreProvider>
  );
}

export default App;
