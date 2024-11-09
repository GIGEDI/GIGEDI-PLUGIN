import React, { useState } from 'react';
import styled from 'styled-components';
import { LargeText, SmallDetailText } from '../styles/typo';
import ShootCommentSection from '../sections/ShootCommentSection';
import ArchiveSection from '../sections/ArchiveSection';
import InfoModal from '../modals/InfoModal';

const PluginPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'yet' | 'doing' | 'done' | 'mentioned'>('yet');
  const [dropdownOpen, setDropdownOpen] = useState<{ [key: number]: boolean }>({});
  const [isExpanded, setIsExpanded] = useState(true);
  const [isInfoModalOpen, setInfoModalOpen] = useState(false);

  const totalArchiveCount = 20;
  const [currentArchiveCount, setCurrentArchiveCount] = useState(0);

  const toggleDropdown = (index: number) => {
    setDropdownOpen((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const handleToggleSize = () => {
    const nextExpandedState = !isExpanded;
    setIsExpanded(nextExpandedState);
    parent.postMessage({ pluginMessage: { type: 'toggleSize', isExpanded: nextExpandedState } }, '*');
  };

  const toggleInfoModal = () => {
    setInfoModalOpen((prev) => !prev);
  };

  return (
    <PluginWrapper>
      <HeaderContainer>
        <Title_SHOOT>SHOOT COMMENT</Title_SHOOT>
        {/* 축소화 , 홈 버튼 */}
        <IconContainer>
          <div
            onClick={handleToggleSize}
            style={{ cursor: 'pointer' }}
            dangerouslySetInnerHTML={{
              __html: `
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0.5" y="0.5" width="31" height="31" rx="3.5" fill="#1D1E1F"/>
                  <rect x="0.5" y="0.5" width="31" height="31" rx="3.5" stroke="#303033"/>
                  <path d="M14.872 16L18.072 12.8H15.2V11.2H20.8V16.8H19.2V13.928L16 17.128V19.2H22.4V9.6H12.8V16H14.872ZM24 8V20.8H16V24H8V16H11.2V8H24ZM14.4 17.6H9.6V22.4H14.4V17.6Z" fill="url(#paint0_linear_1517_1465)"/>
                  <defs>
                    <linearGradient id="paint0_linear_1517_1465" x1="16" y1="8" x2="16" y2="24" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#9CFFBF"/>
                      <stop offset="1" stop-color="#ADD8FF"/>
                    </linearGradient>
                  </defs>
                </svg>
              `,
            }}
          />
          <div
            dangerouslySetInnerHTML={{
              __html: `
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0.5" y="0.5" width="31" height="31" rx="3.5" fill="#1D1E1F"/>
                  <rect x="0.5" y="0.5" width="31" height="31" rx="3.5" stroke="#303033"/>
                  <path d="M23 14.6L16 9L9 14.6V23H13.9V19.5H18.1V23H23V14.6Z" stroke="url(#paint0_linear_132_1849)" stroke-width="1.6"/>
                  <defs>
                    <linearGradient id="paint0_linear_132_1849" x1="16" y1="9" x2="16" y2="23" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#9CFFBF"/>
                      <stop offset="1" stop-color="#ADD8FF"/>
                    </linearGradient>
                  </defs>
                </svg>
              `,
            }}
          />
        </IconContainer>

        <InfoIconContainer onClick={toggleInfoModal}>
        <div
          dangerouslySetInnerHTML={{
            __html: `
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M8 1.45455C4.38505 1.45455 1.45455 4.38505 1.45455 8C1.45455 11.615 4.38505 14.5455 8 14.5455C11.615 14.5455 14.5455 11.615 14.5455 8C14.5455 4.38505 11.615 1.45455 8 1.45455ZM0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8ZM8 4.36364C8.40166 4.36364 8.72727 4.68925 8.72727 5.09091V8C8.72727 8.40166 8.40166 8.72727 8 8.72727C7.59834 8.72727 7.27273 8.40166 7.27273 8V5.09091C7.27273 4.68925 7.59834 4.36364 8 4.36364ZM7.27273 10.9091C7.27273 10.5074 7.59834 10.1818 8 10.1818H8.00727C8.40894 10.1818 8.73455 10.5074 8.73455 10.9091C8.73455 11.3108 8.40894 11.6364 8.00727 11.6364H8C7.59834 11.6364 7.27273 11.3108 7.27273 10.9091Z" fill="#D7D7D9"/>
              </svg>
            `,
          }}
        />
      </InfoIconContainer>
      </HeaderContainer>

      {/* shoot comment */}
      <ShootCommentSection
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        dropdownOpen={dropdownOpen}
        toggleDropdown={toggleDropdown}
        isExpanded={isExpanded}
      />

      {/* archive */}
      {isExpanded && (
        <>
          <TitleArchiveContainer>
            <Title_ARCHIVE>ARCHIVE</Title_ARCHIVE>
            <CountContainer>
              <CountText>{currentArchiveCount}</CountText>
              <SeparatorText>/</SeparatorText>
              <TotalCountText>{totalArchiveCount}</TotalCountText>
            </CountContainer>
          </TitleArchiveContainer>
          <ArchiveSection setArchiveCount={setCurrentArchiveCount} />
        </>
      )}

<InfoModal isOpen={isInfoModalOpen} onClose={toggleInfoModal} />
    </PluginWrapper>    
  );
};

const PluginWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.grey90};
  height: 100vh;
  display: flex;
  flex-direction: column;
  top: 30px;
  right: 18px;
  padding: 20px;
  border: 1px solid ${({ theme }) => theme.colors.grey60};
  overflow: visible;
`;

const Title_SHOOT = styled(LargeText)`
  color: ${({ theme }) => theme.colors.white};
  margin-top: 15px;
`;

const TitleArchiveContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const Title_ARCHIVE = styled(LargeText)`
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 10px;
`;

const CountContainer = styled.div`
  display: flex;
  align-items: center;
`;

const CountText = styled(SmallDetailText)`
  color: ${({ theme }) => theme.colors.white};
  margin-right: 2px;
`;

const SeparatorText = styled(SmallDetailText)`
  color: ${({ theme }) => theme.colors.grey50};
  margin: 0 2px;
`;

const TotalCountText = styled(SmallDetailText)`
  color: ${({ theme }) => theme.colors.grey50};
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  justify-content: space-between;
`;

const InfoIconContainer = styled.div`
  position: absolute;
  top: 85px;
  right: 24px;
`;


export default PluginPage;