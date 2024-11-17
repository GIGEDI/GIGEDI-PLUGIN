import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { LargeText } from '../styles/typo';
import ShootCommentSection from '../sections/ShootCommentSection';
import ArchiveSection from '../sections/ArchiveSection';
import BlockSection from '../sections/BlockSection';
import InfoModal from '../modals/InfoModal';
import { archiveItemsAtom, ArchiveItem } from '../atoms/archiveItemsAtom';

const PluginPage: React.FC = () => {
  const [archiveItems, setArchiveItems] = useRecoilState(archiveItemsAtom);
  const [activeTab, setActiveTab] = useState<'yet' | 'doing' | 'done' | 'mentioned'>('yet');
  const [dropdownOpen, setDropdownOpen] = useState<{ [key: number]: boolean }>({});
  const [isExpanded, setIsExpanded] = useState(true);
  const [isInfoModalOpen, setInfoModalOpen] = useState(false);
  const [currentArchiveCount, setCurrentArchiveCount] = useState(0);
  const [selectedArchive, setSelectedArchive] = useState<ArchiveItem | null>(null);
  const isInBlockSection = selectedArchive !== null;

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
        <div onClick={handleToggleSize} style={{ cursor: 'pointer' }}>
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="0.5" y="0.5" width="31" height="31" rx="3.5" fill="#1D1E1F"/>
          <rect x="0.5" y="0.5" width="31" height="31" rx="3.5" stroke="#303033"/>
          <path d="M14.872 16L18.072 12.8H15.2V11.2H20.8V16.8H19.2V13.928L16 17.128V19.2H22.4V9.6H12.8V16H14.872ZM24 8V20.8H16V24H8V16H11.2V8H24ZM14.4 17.6H9.6V22.4H14.4V17.6Z" fill="url(#paint0_linear_1517_1465)"/>
          <defs>
            <linearGradient id="paint0_linear_1517_1465" x1="16" y1="8" x2="16" y2="24" gradientUnits="userSpaceOnUse">
              <stop stopColor="#9CFFBF"/>
              <stop offset="1" stopColor="#ADD8FF"/>
              </linearGradient>
              </defs>
              </svg>
         </div>
         <div>
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="0.5" y="0.5" width="31" height="31" rx="3.5" fill="#1D1E1F"/>
          <rect x="0.5" y="0.5" width="31" height="31" rx="3.5" stroke="#303033"/>
          <path d="M23 14.6L16 9L9 14.6V23H13.9V19.5H18.1V23H23V14.6Z" stroke="url(#paint0_linear_132_1849)" strokeWidth="1.6"/>
          <defs>
            <linearGradient id="paint0_linear_132_1849" x1="16" y1="9" x2="16" y2="23" gradientUnits="userSpaceOnUse">
              <stop stopColor="#9CFFBF"/>
              <stop offset="1" stopColor="#ADD8FF"/>
            </linearGradient>
          </defs>
          </svg>
         </div>
        </IconContainer>

        <InfoIconContainer onClick={toggleInfoModal}>
        <div>
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M8 14.5455C4.38505 14.5455 1.45455 11.615 1.45455 8C1.45455 4.38505 4.38505 1.45455 8 1.45455C11.615 1.45455 14.5455 4.38505 14.5455 8C14.5455 11.615 11.615 14.5455 8 14.5455ZM0 8C0 12.4183 3.58172 16 8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8ZM8 11.6364C8.40166 11.6364 8.72727 11.3108 8.72727 10.9091V8C8.72727 7.59834 8.40166 7.27273 8 7.27273C7.59834 7.27273 7.27273 7.59834 7.27273 8V10.9091C7.27273 11.3108 7.59834 11.6364 8 11.6364ZM7.27273 5.09091C7.27273 5.49257 7.59834 5.81818 8 5.81818H8.00727C8.40893 5.81818 8.73455 5.49257 8.73455 5.09091C8.73455 4.68925 8.40893 4.36364 8.00727 4.36364H8C7.59834 4.36364 7.27273 4.68925 7.27273 5.09091Z" fill="#707374"/>
  </svg>
</div>

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
      

      {/* archive or block section */}
      {isExpanded && (
        <>
        <TitleContainer>
          <Title_ARCHIVE isSelected={!isInBlockSection}>ARCHIVE</Title_ARCHIVE>
          <ArchiveIconWrapper>
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="0.5" y="0.5" width="31" height="31" rx="3.5" fill="#1D1E1F" />
          <rect
            x="0.5"
            y="0.5"
            width="31"
            height="31"
            rx="3.5"
            stroke="#303033"
          />
          <path
            d="M7.16602 16C7.16602 20.4178 10.7482 24 15.166 24C17.2905 24 19.326 23.1644 20.8549 21.6889L19.5216 20.3556C18.3927 21.5556 16.8193 22.2222 15.166 22.2222C9.61935 22.2222 6.84602 15.52 10.766 11.6C14.686 7.68 21.3882 10.4622 21.3882 16H18.7216L22.2771 19.5556H22.366L25.8327 16H23.166C23.166 11.5822 19.5838 8 15.166 8C10.7482 8 7.16602 11.5822 7.16602 16Z"
            fill="url(#paint0_linear_272_1769)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_272_1769"
              x1="16.4993"
              y1="8"
              x2="16.4993"
              y2="24"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#9CFFBF" />
              <stop offset="1" stop-color="#ADD8FF" />
            </linearGradient>
          </defs>
        </svg>
      </ArchiveIconWrapper>
          {isInBlockSection && (
            <>
            <Separator>|</Separator>
            <Title_BLOCK>BLOCK</Title_BLOCK>
            </>
          )}
          </TitleContainer>
          {!selectedArchive ? (
            <ArchiveSection
            setArchiveCount={setCurrentArchiveCount}
            onSelectArchive={(archive) => setSelectedArchive(archive as ArchiveItem)}
            totalArchiveCount={20}
            />
          ) : (
          <BlockSection
          archive={selectedArchive}
          goBack={() => setSelectedArchive(null)}
          setBlockCount={(count) => {}}
          />
          )}
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
  overflow: hidden;
`;

const ArchiveIconWrapper = styled.div`
  margin-left: 8px;
  margin-bottom: 10px;
`;

const Title_SHOOT = styled(LargeText)`
  color: ${({ theme }) => theme.colors.white};
  margin-top: 15px;
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  position: absolute;
  top: 30px;
  right: 20px; 
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

const InfoIconContainer = styled.div`
  position: absolute;
  top: 85px;
  right: 24px;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Title_ARCHIVE = styled(LargeText)<{ isSelected: boolean }>`
  color: ${({ theme, isSelected }) => (isSelected ? theme.colors.white : theme.colors.grey70)};
  margin-bottom: 10px;
`;

const Title_BLOCK = styled(LargeText)`
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 10px;
`;

const Separator = styled.span`
  color: ${({ theme }) => theme.colors.grey70};
  margin: 0 8px;
  position: relative;
  top: -5px;
`;


export default PluginPage;