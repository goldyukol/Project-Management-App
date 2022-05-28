import React, { Suspense } from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'reduxjs-toolkit-persist/integration/react';

import { ErrorBoundary } from './components';
import { store, persistor } from './store';
import App from './app';

import reportWebVitals from './reportWebVitals';

import 'antd/dist/antd.min.css';
import './index.scss';
import './scss/_normalize.scss';
import { LoadingPage } from './pages';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ErrorBoundary>
        <Suspense fallback={<LoadingPage />}>
          <Provider store={store}>
            <PersistGate loading={<LoadingPage />} persistor={persistor}>
              <App />
            </PersistGate>
          </Provider>
        </Suspense>
      </ErrorBoundary>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
