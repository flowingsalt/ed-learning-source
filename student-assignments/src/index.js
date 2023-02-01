import React from 'react';
import ReactDOM from 'react-dom/client';
import singleSpaReact from 'single-spa-react';
import App from './components/App';

var _singleSpaReact = singleSpaReact({
  React: React,
  ReactDOM: ReactDOM,
  rootComponent: App,
  // `domElementGetter` is handled by the Container
  renderType: 'createRoot'
}),
    bootstrap = _singleSpaReact.bootstrap,
    mount = _singleSpaReact.mount,
    unmount = _singleSpaReact.unmount;

export { bootstrap, mount, unmount };