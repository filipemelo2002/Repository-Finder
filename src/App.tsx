import React from 'react';
import { ToastContainer } from 'react-toastify';

import Routes from './routes';

import { GlobalStyle } from './style/global';

import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes />
      <ToastContainer />
    </>
  );
}

export default App;
