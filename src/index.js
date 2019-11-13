import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Switch } from "react-router-dom";

import GlobalStyle from './styled';
import colors from './utils/colors';

import reducer from './reducers';
import middleware from './middlewares';

import routes from './routes/common';
import * as serviceWorker from './serviceWorker';

const store = createStore(reducer, middleware);

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={colors}>
      <GlobalStyle />
      <Router>
        <Switch>
          {routes}
        </Switch>
      </Router>
    </ThemeProvider>
  </Provider>,
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
