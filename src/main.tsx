import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {
  renderWithQiankun,
  qiankunWindow,
} from 'vite-plugin-qiankun/dist/helper';

// some code
renderWithQiankun({
  mount(props) {
    console.log('mount');
  },
  bootstrap() {
    console.log('bootstrap');
  },
  unmount(props: any) {
    console.log('unmount');
    const { container } = props;
    const mountRoot = container?.querySelector('#root');
    ReactDOM.unmountComponentAtNode(
      mountRoot || document.querySelector('#root')
    );
  },
});

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
