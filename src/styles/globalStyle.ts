import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
  ${reset}

  @font-face {
    font-family: 'Pretendard';
    font-weight: 400;
    src: url(../public/fonts/Pretendard-Regular.ttf) format('truetype');
  }
  @font-face {
    font-family: 'Pretendard';
    font-weight: 700;
    src: url(../public/fonts/Pretendard-Bold.ttf) format('truetype');
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${({ theme }) => theme.fonts.regular};
    line-height: ${({ theme }) => theme.lineHeight};
  }

  html, body, #root {
    font-family: ${({ theme }) => theme.fonts.regular};
    line-height: ${({ theme }) => theme.lineHeight};
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;
