import React, { useState } from 'react';
import styled from 'styled-components';
import { Shoot } from '../atoms/archiveItemsAtom';
import { SmallDetailText, SmallText } from '../styles/typo';

interface RealShootSectionProps {
  shoots: Shoot[];
  selectedBlockTitle: string;
  goBack: () => void;
}

const RealShootSection: React.FC<RealShootSectionProps> = ({ shoots, selectedBlockTitle, goBack }) => {
  const [shootStatuses, setShootStatuses] = useState(
    shoots.map(() => 'yet' as 'yet' | 'doing' | 'done')
  );

  const [inputText, setInputText] = useState('');
  const [statusCounts, setStatusCounts] = useState({ yet: 0, doing: 0, done: 0 });

  const handleIconClick = (index: number, status: 'yet' | 'doing' | 'done') => {
    const updatedStatuses = [...shootStatuses];
    updatedStatuses[index] = status;
    setShootStatuses(updatedStatuses);

    const newCounts = { ...statusCounts };
    newCounts[status] += 1;
    setStatusCounts(newCounts);
  };

  return (
    <ShootContainerWrapper>
      <ShootContainer>
        <TopBar>
          <Title>{selectedBlockTitle}</Title>
          <CloseButtonWrapper onClick={goBack}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 20C11.8071 20 11.6221 19.9234 11.4857 19.787C11.3494 19.6506 11.2727 19.4656 11.2727 19.2727V17.0909H8.36364C7.97787 17.0909 7.6079 16.9377 7.33512 16.6649C7.06234 16.3921 6.90909 16.0221 6.90909 15.6364V8.36364C6.90909 7.55636 7.56364 6.90909 8.36364 6.90909H18.5455C18.9312 6.90909 19.3012 7.06234 19.574 7.33512C19.8468 7.6079 20 7.97787 20 8.36364V15.6364C20 16.0221 19.8468 16.3921 19.574 16.6649C19.3012 16.9377 18.9312 17.0909 18.5455 17.0909H15.5636L12.8727 19.7891C12.7273 19.9273 12.5455 20 12.3636 20H12ZM12.7273 15.6364V17.8764L14.9673 15.6364H18.5455V8.36364H8.36364V15.6364H12.7273ZM5.45455 14.1818H4V5.45455C4 5.06878 4.15325 4.69881 4.42603 4.42603C4.69881 4.15325 5.06878 4 5.45455 4H17.0909V5.45455H5.45455V14.1818Z" fill="url(#paint0_linear_257_1512)" />
              <defs>
                <linearGradient id="paint0_linear_257_1512" x1="12" y1="4" x2="12" y2="20" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#9CFFBF" />
                  <stop offset="1" stopColor="#ADD8FF" />
                </linearGradient>
              </defs>
            </svg>
            <CloseButton>Close</CloseButton>
          </CloseButtonWrapper>
        </TopBar>
        <ShootContent hasScrollbar={shoots.length > 3}>
          {shoots.map((shoot, index) => (
            <ShootItem key={index}>
              <ProfileImg src={shoot.imgUrl} />
              <ContentContainer>
                <HeaderContainer>
                  <Username>{shoot.username}</Username>
                  <Timestamp>{shoot.timestamp}</Timestamp>
                </HeaderContainer>
                <Content>{shoot.content}</Content>
                <IconTabs>
                  {(['yet', 'doing', 'done'] as const).map((status) => (
                    <IconTab
                      key={status}
                      isActive={shootStatuses[index] === status}
                      onClick={() => handleIconClick(index, status)}
                      dangerouslySetInnerHTML={{
                        __html: shootStatuses[index] === status ? icons[status].active : icons[status].inactive,
                      }}
                    />
                  ))}
                </IconTabs>
              </ContentContainer>
            </ShootItem>
          ))}
          <InputContainer>
          <StyledInput
            type="text"
            placeholder="SEND A SHOOT..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
          <SendButton>
          <svg width="54" height="32" viewBox="0 0 54 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="54" height="32" rx="16" fill="#303033"/>
<path d="M18.9998 8L33.8826 21.9565C33.8826 21.9565 34.1737 22.3535 33.8032 22.7417C33.4415 23.1299 32.9651 22.7946 32.9651 22.7946L18.9998 8ZM23.4196 9.40271L34.9765 20.0333C34.9765 20.0333 35.2588 20.4215 34.8971 20.792C34.5266 21.2066 34.0502 20.8714 34.0502 20.8714L23.4196 9.40271ZM20.3142 12.411L31.8712 23.024C31.8712 23.024 32.1535 23.4122 31.7918 23.8003C31.4212 24.1973 30.9448 23.8797 30.9448 23.8797L20.3142 12.411ZM27.1602 10.6113L35.2324 18.0307C35.2324 18.0307 35.4265 18.3042 35.1706 18.5865C34.9236 18.8511 34.5884 18.613 34.5884 18.613L27.1602 10.6113ZM21.3376 15.8605L29.4098 23.2886C29.4098 23.2886 29.6039 23.5621 29.3569 23.8356C29.101 24.1091 28.7658 23.8797 28.7658 23.8797L21.3376 15.8605ZM30.9801 12.3405L34.6589 15.7105C34.6589 15.7105 34.756 15.834 34.6148 15.9663C34.509 16.0898 34.3413 15.984 34.3413 15.984L30.9801 12.3405ZM23.1991 19.5569L26.8867 22.9181C26.8867 22.9181 26.9837 23.0505 26.8514 23.174C26.7279 23.3063 26.5603 23.1916 26.5603 23.1916L23.1991 19.5569Z" fill="white"/>
</svg>
          </SendButton>
        </InputContainer>
        </ShootContent>
      </ShootContainer>
    </ShootContainerWrapper>
  );
};

const icons = {
    yet: {
      active: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 5H8.6875V6.66667H5.5625V18.3333H8.6875V20H4V5ZM7.90625 16.6667V15H9.46875V16.6667H7.90625ZM11.0312 16.6667V15H12.5937V16.6667H11.0312ZM14.1562 16.6667V15H15.7187V16.6667H14.1562ZM19.625 5V20H14.9375V18.3333H18.0625V6.66667H14.9375V5H19.625Z" fill="#6EFFD9"/>
      </svg>`,
      inactive: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 5H8.6875V6.66667H5.5625V18.3333H8.6875V20H4V5ZM7.90625 16.6667V15H9.46875V16.6667H7.90625ZM11.0312 16.6667V15H12.5937V16.6667H11.0312ZM14.1562 16.6667V15H15.7187V16.6667H14.1562ZM19.625 5V20H14.9375V18.3333H18.0625V6.66667H14.9375V5H19.625Z" fill="#9A9C9E"/>
      </svg>`
    },
    doing: {
      active: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="11.333" y="4" width="1.33333" height="3.33333" rx="0.666667" fill="#6EFFD9"/>
  <rect width="1.33333" height="3.33333" rx="0.666667" transform="matrix(1 0 0 -1 11.333 20)" fill="#6EFFD9"/>
  <rect x="7.33301" y="11.3335" width="1.33333" height="3.33333" rx="0.666667" transform="rotate(90 7.33301 11.3335)" fill="#6EFFD9"/>
  <rect width="1.33333" height="3.33333" rx="0.666667" transform="matrix(4.37114e-08 1 1 -4.37114e-08 16.665 11.3335)" fill="#6EFFD9"/>
  <rect x="8.21973" y="9" width="1.33333" height="3.33333" rx="0.666667" transform="rotate(120 8.21973 9)" fill="#6EFFD9"/>
  <rect width="1.33333" height="3.33333" rx="0.666667" transform="matrix(-0.5 -0.866025 -0.866025 0.5 8.30762 15.1548)" fill="#6EFFD9"/>
  <rect width="1.33333" height="3.33333" rx="0.666667" transform="matrix(0.5 0.866025 0.866025 -0.5 15.999 8.90771)" fill="#6EFFD9"/>
  <rect x="15.999" y="15.1548" width="1.33333" height="3.33333" rx="0.666667" transform="rotate(-60 15.999 15.1548)" fill="#6EFFD9"/>
  <rect x="10.1533" y="7.55322" width="1.33333" height="3.33333" rx="0.666667" transform="rotate(150 10.1533 7.55322)" fill="#6EFFD9"/>
  <rect width="1.33333" height="3.33333" rx="0.666667" transform="matrix(-0.866026 -0.5 -0.5 0.866026 10.1533 16.6665)" fill="#6EFFD9"/>
  <rect width="1.33333" height="3.33333" rx="0.666667" transform="matrix(0.866026 0.5 0.5 -0.866026 13.999 7.55322)" fill="#6EFFD9"/>
  <rect x="13.999" y="16.6665" width="1.33333" height="3.33333" rx="0.666667" transform="rotate(-30 13.999 16.6665)" fill="#6EFFD9"/>
  </svg>`,
      inactive: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="11.3333" y="4" width="1.33333" height="3.33333" rx="0.666667" fill="#9A9C9E"/>
  <rect width="1.33333" height="3.33333" rx="0.666667" transform="matrix(1 0 0 -1 11.3333 20)" fill="#9A9C9E"/>
  <rect x="7.33334" y="11.333" width="1.33333" height="3.33333" rx="0.666667" transform="rotate(90 7.33334 11.333)" fill="#9A9C9E"/>
  <rect width="1.33333" height="3.33333" rx="0.666667" transform="matrix(4.37114e-08 1 1 -4.37114e-08 16.6654 11.333)" fill="#9A9C9E"/>
  <rect x="8.22006" y="9" width="1.33333" height="3.33333" rx="0.666667" transform="rotate(120 8.22006 9)" fill="#9A9C9E"/>
  <rect width="1.33333" height="3.33333" rx="0.666667" transform="matrix(-0.5 -0.866025 -0.866025 0.5 8.30795 15.1543)" fill="#9A9C9E"/>
  <rect width="1.33333" height="3.33333" rx="0.666667" transform="matrix(0.5 0.866025 0.866025 -0.5 15.9994 8.9082)" fill="#9A9C9E"/>
  <rect x="15.9994" y="15.1543" width="1.33333" height="3.33333" rx="0.666667" transform="rotate(-60 15.9994 15.1543)" fill="#9A9C9E"/>
  <rect x="10.1537" y="7.55371" width="1.33333" height="3.33333" rx="0.666667" transform="rotate(150 10.1537 7.55371)" fill="#9A9C9E"/>
  <rect width="1.33333" height="3.33333" rx="0.666667" transform="matrix(-0.866026 -0.5 -0.5 0.866026 10.1537 16.667)" fill="#9A9C9E"/>
  <rect width="1.33333" height="3.33333" rx="0.666667" transform="matrix(0.866026 0.5 0.5 -0.866026 13.9994 7.55371)" fill="#9A9C9E"/>
  <rect x="13.9994" y="16.667" width="1.33333" height="3.33333" rx="0.666667" transform="rotate(-30 13.9994 16.667)" fill="#9A9C9E"/>
  </svg>`
    },
    done: {
      active: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 4C7.6 4 4 7.6 4 12C4 16.4 7.6 20 12 20C16.4 20 20 16.4 20 12C20 7.6 16.4 4 12 4ZM12 18.4C8.472 18.4 5.6 15.528 5.6 12C5.6 8.472 8.472 5.6 12 5.6C15.528 5.6 18.4 8.472 18.4 12C18.4 15.528 15.528 18.4 12 18.4ZM15.672 8.464L10.4 13.736L8.328 11.672L7.2 12.8L10.4 16L16.8 9.6L15.672 8.464Z" fill="#6EFFD9"/>
      </svg>`,
      inactive: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 4C7.6 4 4 7.6 4 12C4 16.4 7.6 20 12 20C16.4 20 20 16.4 20 12C20 7.6 16.4 4 12 4ZM12 18.4C8.472 18.4 5.6 15.528 5.6 12C5.6 8.472 8.472 5.6 12 5.6C15.528 5.6 18.4 8.472 18.4 12C18.4 15.528 15.528 18.4 12 18.4ZM15.672 8.464L10.4 13.736L8.328 11.672L7.2 12.8L10.4 16L16.8 9.6L15.672 8.464Z" fill="#9A9C9E"/>
      </svg>`
    },
  };

const ShootContainerWrapper = styled.div`
  width: 520px;
  max-height: 1200px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.grey80};
  display: flex;
  flex-direction: column;
`;

const ShootContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.colors.tint20};
  border-radius: 10px;
  width: 495px;
  max-height: 400px;
  margin: 10px auto;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.grey80};
`;

const ShootContent = styled.div<{ hasScrollbar: boolean }>`
  overflow-y: scroll;
  padding: ${({ hasScrollbar }) => (hasScrollbar ? '8px 12px 8px 0' : '8px')};
  max-height: 300px;
  scrollbar-width: thin;
  scrollbar-color: ${({ theme }) => theme.colors.grey70} transparent;

  &::-webkit-scrollbar {
    width: ${({ hasScrollbar }) => (hasScrollbar ? '6px' : '0')};
    position: absolute;
    right: 0;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.grey60};
    border-radius: 10px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0 8px;
  border-radius: 24px;
  background-color: ${({ theme }) => theme.colors.grey90};
  height: 40px;
  margin-top: 8px;
`;

const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 12px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey75};
`;

const Title = styled(SmallText)`
  color: ${({ theme }) => theme.colors.grey40};
`;

const CloseButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const CloseButton = styled.button`
  background: linear-gradient(90deg, #9CFFBF 0%, #ADD8FF 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
  border: none;
  cursor: pointer;
  margin-left: 5px;
  position: relative;
  top: 2px;
`;

const IconTabs = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  margin: 16px 0;
`;

const IconTab = styled.div<{ isActive: boolean }>`
  width: 61px;
  height: 36px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ isActive, theme }) =>
    isActive
      ? `border: 1px solid ${theme.colors.base}; border-radius: 10px;`
      : `border: 1px solid ${theme.colors.grey50}; border-radius: 10px;`}
`;

const ShootItem = styled.div`
  display: flex;
  gap: 12px;
  align-items: flex-start;
  padding: 8px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey75}; 
  
  &:last-child {
    border-bottom: none; 
  }
`;

const ProfileImg = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 4px;
`;

const Username = styled(SmallDetailText)`
  color: ${({ theme }) => theme.colors.white};
`;

const Timestamp = styled(SmallDetailText)`
  color: ${({ theme }) => theme.colors.white};
`;

const Content = styled(SmallText)`
  color: ${({ theme }) => theme.colors.white};
  margin: 4px 0;
`;

const StyledInput = styled.input`
  flex: 1;
  width: 463px;
  height: 40px;
  padding: 8px 16px;
  border-radius: 24px;
  border: none;
  background-color: ${({ theme }) => theme.colors.grey90};
  color: ${({ theme }) => theme.colors.white};
  font-size: 14px;
  outline: none;

  &::placeholder {
    color: ${({ theme }) => theme.colors.grey70};
    text-transform: uppercase;
    letter-spacing: 1px;
  }
`;

const SendButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 0;
  margin-left: 8px;
  height: 100%;
`;


export default RealShootSection;
