'use client';
import { PersistGate } from 'redux-persist/integration/react';
import store from './store';
import { Provider } from 'react-redux';
import persistStore from 'redux-persist/es/persistStore';
import { SessionProvider } from 'next-auth/react';

const persistor = persistStore(store);

const ReduxProvider = ({ children, session }) => {
    return (
        <SessionProvider session={session}>
        <Provider store={ store }>
            <PersistGate persistor={ persistor }>
                { children }
            </PersistGate>
        </Provider>
        </SessionProvider>
    );
};

export default ReduxProvider;
