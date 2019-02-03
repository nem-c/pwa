import React from 'react';
import { render } from 'react-dom';

import * as serviceWorker from './serviceWorker';

import App from './components/App';

import './style.scss';

render(
    <App />,
    document.getElementById('root')
);

// TODO: to work offline and load faster, change unregister() to register() below. See: http://bit.ly/CRA-PWA
serviceWorker.unregister();
