/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import './config/reactotronConfig';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ToastContainer } from 'react-toastify';

import GlobalStyle from './styles/global';
import Routes from './routes';

import Header from './components/Header';
import Footer from './components/Footer';

import history from './services/history';
import { store, persistor } from './store';
import UserProvider from './context/user';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router history={history}>
          <UserProvider>
            <Header />
            <Routes />
            <GlobalStyle />
            <Footer />
            <ToastContainer autoClose={3000} />
          </UserProvider>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
