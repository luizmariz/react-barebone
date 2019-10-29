import styled from 'styled-components';

export const AppContainer = styled.div`
  text-align: center;
`;

export const AppLogo = styled.img`
  height: 40vmin;
`;

export const AppHeader = styled.header`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
`;

export const AppLink = styled.a`
  color: ${props => props.theme.link};
  margin-bottom: 1.5rem;
`;