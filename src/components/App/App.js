import React from 'react';
import logo from '../../assets/images/logo.svg';
import * as S from './styled';

function App() {
  return (
    <S.Container>
      <S.Header>
        <S.Logo
          src={logo}
          alt="logo"
        />
        <p>
          Edit <code>src/components/App</code> and save to reload.
          Barebone from create react-app
        </p>
        <S.Link
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </S.Link>
      </S.Header>
    </S.Container>
  );
}

export default App;
