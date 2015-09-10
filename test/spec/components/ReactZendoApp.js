'use strict';

describe('ReactZendoApp', () => {
  let React = require('react/addons');
  let ReactZendoApp, component;

  beforeEach(() => {
    let container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    ReactZendoApp = require('components/ReactZendoApp.js');
    component = React.createElement(ReactZendoApp);
  });

  it('should create a new instance of ReactZendoApp', () => {
    expect(component).toBeDefined();
  });
});
