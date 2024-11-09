import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { RecoilRoot } from 'recoil';
import App from './App';
import { GlobalStyle } from './styles/globalStyle';
import { theme } from './styles/theme';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </RecoilRoot>,
    document.getElementById('root')
  );
});
