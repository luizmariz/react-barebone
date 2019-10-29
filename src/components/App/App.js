import React from 'react';
import logo from '../../assets/images/logo.svg';
import {
  AppContainer,
  AppHeader,
  AppLogo,
  AppLink
} from './App-styles';

function App () {
  return (
    <AppContainer>
      <AppHeader>
        <AppLogo
          src={logo}
          alt="logo"
        />
        <p>
          Edit <code>src/components/App</code> and save to reload.
          Barebone from create react-app
        </p>
        <AppLink
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </AppLink>
      </AppHeader>
    </AppContainer>
  );
}

export default App;
