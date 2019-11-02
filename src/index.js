import React from 'react';
import ReactDOM from 'react-dom';
import 'font-awesome/css/font-awesome.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';

const render = () => {
  ReactDOM.render(<App />,
    document.getElementById('root') // eslint-disable-line no-undef
  );
};

render();
