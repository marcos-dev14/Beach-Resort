import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { RoomProvider } from './Context';

ReactDOM.render(
  <React.StrictMode>
    <RoomProvider>
    <Router>
      <App />
    </Router>
    </RoomProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
