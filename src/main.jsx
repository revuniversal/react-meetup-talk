import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './app/app'
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

ReactDOM.render(
    <App title="Just React" />
    document.getElementById('AppHost'));
