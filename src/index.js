'use strict';

var ReactZendoApp = require('./components/ReactZendoApp');
var React = require('react');
var Provider = require('react-redux').Provider;

import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';

var configureStore = require('./configureStore');

var content = document.getElementById('content');

const store = configureStore();

React.render(
  <div>
    <Provider store={store}>
      {() => <ReactZendoApp />}
    </Provider>
    <DebugPanel top right bottom>
      <DevTools store={store} monitor={LogMonitor} />
    </DebugPanel>
  </div>,
  content
);
