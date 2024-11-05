import React from 'react';
import styled from 'styled-components';

interface LoginPageProps {
  onLogin: () => void; 
}

const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => (
  <LoginWrapper>
    {/* 로고 */}
    <Logo
      src={`https://corsproxy.io/?${encodeURIComponent('https://github.com/user-attachments/assets/5c5c2e64-f1a3-489d-a836-0f165382daf2')}`}
      alt="Logo"
    />

    {/* 구글 로그인 */}
    <Button
      src={`https://corsproxy.io/?${encodeURIComponent('https://github.com/user-attachments/assets/ba2a6ded-92d8-47a3-adf1-bbc65b431cc2')}`}
      alt="Google Login"
      onClick={onLogin} // 임시
    />

    {/* 웹사이트 */}
    <Button
      src={`https://corsproxy.io/?${encodeURIComponent('https://github.com/user-attachments/assets/6d8d5ec5-e9b5-42c2-bc8c-9293ae11502a')}`}
      alt="Website"
    />
  </LoginWrapper>
);

export default LoginPage;

const LoginWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.grey90};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Logo = styled.img`
  margin-top: -90px;
  margin-bottom: 100px;
`;

const Button = styled.img`
  cursor: pointer;
  margin-bottom: -15px; 
`;
