import React from 'react';
import styled from 'styled-components';

interface LoginPageProps {
  onLogin: () => void; 
}

fetch(`https://api.allorigins.win/get?url=${encodeURIComponent('https://api.shoot-manage.com/api/v1/members/info')}`)
  .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      console.error('서버에 접근할 수 있지만, 응답 상태가 정상이 아닙니다.', response.status);
      return null;
    }
  })
  .then(data => {
    if (data && data.contents) {
      console.log('서버 응답 데이터:', JSON.parse(data.contents));
    }
  })
  .catch(error => {
    console.error('서버에 접근할 수 없습니다.', error);
  });

  fetch(`https://api.allorigins.win/get?url=${encodeURIComponent('https://api.shoot-manage.com/')}`)
  .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      console.error('서버에 접근할 수 있지만, 응답 상태가 정상이 아닙니다.', response.status);
      return null;
    }
  })
  .then(data => {
    if (data && data.contents) {
      console.log('서버 응답 데이터:', JSON.parse(data.contents));
    }
  })
  .catch(error => {
    console.error('서버에 접근할 수 없습니다.', error);
  });





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
