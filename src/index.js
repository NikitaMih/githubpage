import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/header';

const root = ReactDOM.createRoot(document.getElementById('root'));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persister}>
        <Navigation />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

