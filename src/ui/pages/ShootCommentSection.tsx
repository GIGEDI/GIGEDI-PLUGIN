import React from 'react';
import styled from 'styled-components';
import { SmallText, SmallDetailText } from '../styles/typo';

interface ShootCommentSectionProps {
  activeTab: 'yet' | 'doing' | 'done' | 'mentioned';
  setActiveTab: (tab: 'yet' | 'doing' | 'done' | 'mentioned') => void;
  dropdownOpen: { [key: number]: boolean };
  toggleDropdown: (index: number) => void;
  isExpanded: boolean;
}

const ShootCommentSection: React.FC<ShootCommentSectionProps> = ({
  activeTab,
  setActiveTab,
  dropdownOpen,
  toggleDropdown,
  isExpanded,
}) => {
  const tasks = {
    yet: [
      { name: 'CRYSTAL', text: '와이어프레임 확인해 주세요.', page: '메인페이지 플로우 | ', time: 'Just now' },
      { name: 'TAEK', text: '@지선 @SUJIN.K 백엔드분들 이해 안 가나요?', page: '메인페이지 플로우 | ', time: '1 day ago' },
      { name: 'GAUN', text: '이거 폰트 컬러 안 바뀐 것 같아요!', page: '메인페이지 플로우 | ', time: '12 hours ago' },
      { name: 'GAUN', text: '이거 폰트 컬러 안 바뀐 것 같아요!', page: '메인페이지 플로우 | ', time: '12 hours ago' },
    ],
    doing: [
      { name: 'JIN', text: '플로우 다 확인했나요?', page: '메인페이지 플로우 | ', time: '2 hours ago' },
      { name: 'SUJIN.K', text: '디자인 검토 완료했습니다.', page: '메인페이지 플로우 | ', time: '5 hours ago' },
    ],
    done: [
      { name: 'CRYSTAL', text: '작업이 모두 완료되었습니다.', page: '메인페이지 플로우 | ', time: '1 day ago' },
      { name: 'TAEK', text: '코드 리뷰가 끝났습니다.', page: '메인페이지 플로우 | ', time: '3 days ago' },
    ],
    mentioned: [
      { name: 'GAUN', text: '@SUJIN.K 최신 디자인 시스템 확인 부탁드립니다.', page: '메인페이지 플로우 | ', time: '4 hours ago' },
      { name: 'TAEK', text: '@JIN 변경 사항 공유합니다.', page: '메인페이지 플로우 | ', time: '1 day ago' },
    ],
  };

  return (
    <>
    <TabContainer>
        {['yet', 'doing', 'done', 'mentioned'].map((tab) => (
          <Tab key={tab} active={activeTab === tab} onClick={() => setActiveTab(tab as keyof typeof icons)}>
            <div
              dangerouslySetInnerHTML={{
                __html: activeTab === tab ? icons[tab].active : icons[tab].inactive,
              }}
            />
            {activeTab === tab && <SmallText>{tab[0].toUpperCase() + tab.slice(1)}</SmallText>}
          </Tab>
        ))}
      </TabContainer>

    <ShootSection hasScrollbar={tasks[activeTab].length > 3} isExpanded={isExpanded}>
      <TaskList>
        {tasks[activeTab].map((task, index) => (
          <TaskItem key={index}>
            <TaskContent>
              <TaskHeader>
                <div
                  style={{ marginTop: '-5px' }}
                  dangerouslySetInnerHTML={{
                    __html: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 2L16.8828 15.9565C16.8828 15.9565 17.174 16.3535 16.8034 16.7417C16.4417 17.1299 15.9653 16.7946 15.9653 16.7946L2 2ZM6.41986 3.40271L17.9768 14.0333C17.9768 14.0333 18.2591 14.4215 17.8974 14.792C17.5268 15.2066 17.0505 14.8714 17.0505 14.8714L6.41986 3.40271ZM3.31449 6.41104L14.8714 17.024C14.8714 17.024 15.1537 17.4122 14.792 17.8003C14.4215 18.1973 13.9451 17.8797 13.9451 17.8797L3.31449 6.41104ZM10.1604 4.61133L18.2326 12.0307C18.2326 12.0307 18.4267 12.3042 18.1709 12.5865C17.9238 12.8511 17.5886 12.613 17.5886 12.613L10.1604 4.61133ZM4.33785 9.86047L12.41 17.2886C12.41 17.2886 12.6041 17.5621 12.3571 17.8356C12.1013 18.1091 11.766 17.8797 11.766 17.8797L4.33785 9.86047ZM13.9804 6.34046L17.6592 9.71049C17.6592 9.71049 17.7562 9.834 17.6151 9.96633C17.5092 10.0898 17.3416 9.98397 17.3416 9.98397L13.9804 6.34046ZM6.19931 13.5569L9.88693 16.9181C9.88693 16.9181 9.98397 17.0505 9.85164 17.174C9.72813 17.3063 9.56051 17.1916 9.56051 17.1916L6.19931 13.5569Z" fill="#9A9C9E"/>
                      </svg>`,
                  }}
                />
                <NameText>{task.name}</NameText>
                <MetadataText>{task.page}</MetadataText>
                <MetadataText>{task.time}</MetadataText>
              </TaskHeader>
              <TaskText>
                {task.text.split(' ').map((word, index) =>
                  word.startsWith('@') ? (
                    <HighlightText key={index}>{word}</HighlightText>
                  ) : (
                    `${word} `
                  )
                )}
              </TaskText>
            </TaskContent>
            <StatusButton onClick={() => toggleDropdown(index)}>
              <IconContainer>
                <div dangerouslySetInnerHTML={{ __html: icons[activeTab].active }} />
              </IconContainer>
              <ArrowIcon
                dangerouslySetInnerHTML={{
                  __html: dropdownOpen[index]
                    ? `<svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.22488 14.5532C5.08197 14.6783 5 14.8589 5 15.0488C5 15.6146 5.66635 15.9169 6.09213 15.5444L12 10.375L17.9079 15.5444C18.3336 15.9169 19 15.6146 19 15.0488C19 14.8589 18.918 14.6783 18.7751 14.5532L12 8.625L5.22488 14.5532Z" fill="#707374"/></svg>`
                    : `<svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.22488 10.5718C5.08197 10.4467 5 10.2661 5 10.0762C5 9.51043 5.66635 9.20806 6.09213 9.58062L12 14.75L17.9079 9.58061C18.3336 9.20806 19 9.51043 19 10.0762C19 10.2661 18.918 10.4467 18.7751 10.5718L12 16.5L5.22488 10.5718Z" fill="#707374"/></svg>`,
                }}
              />
              {dropdownOpen[index] && (
                  <DropdownMenu>
                    <DropdownItem onClick={() => setActiveTab('yet')} selected={activeTab === 'yet'}>
                      <Icon dangerouslySetInnerHTML={{ __html: activeTab === 'yet' ? icons.yet.active : icons.yet.inactive }} />
                      Yet
                    </DropdownItem>
                    <DropdownItem onClick={() => setActiveTab('doing')} selected={activeTab === 'doing'}>
                      <Icon dangerouslySetInnerHTML={{ __html: activeTab === 'doing' ? icons.doing.active : icons.doing.inactive }} />
                      Now
                    </DropdownItem>
                    <DropdownItem onClick={() => setActiveTab('done')} selected={activeTab === 'done'}>
                      <Icon dangerouslySetInnerHTML={{ __html: activeTab === 'done' ? icons.done.active : icons.done.inactive }} />
                      Done
                    </DropdownItem>
                  </DropdownMenu>
                )}
            </StatusButton>
          </TaskItem>
        ))}
      </TaskList>
    </ShootSection>
    </>
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
    mentioned: {
      active: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 14.4C12.648 14.4 13.2 14.16 13.688 13.688C14.16 13.2 14.4 12.648 14.4 12C14.4 11.352 14.16 10.8 13.688 10.312C13.2 9.84 12.648 9.6 12 9.6C11.352 9.6 10.8 9.84 10.312 10.312C9.84 10.8 9.6 11.352 9.6 12C9.6 12.648 9.84 13.2 10.312 13.688C10.8 14.16 11.352 14.4 12 14.4ZM12 4C14.2 4 16.08 4.8 17.64 6.36C19.2 7.92 20 9.8 20 12V13.16C20 13.96 19.72 14.64 19.2 15.2C18.64 15.736 18 16 17.2 16C16.24 16 15.448 15.6 14.848 14.8C14.048 15.6 13.104 16 12 16C10.904 16 9.96 15.6 9.168 14.832C8.4 14.04 8 13.104 8 12C8 10.904 8.4 9.96 9.168 9.168C9.96 8.4 10.904 8 12 8C13.104 8 14.04 8.4 14.832 9.168C15.6 9.96 16 10.904 16 12V13.16C16 13.488 16.128 13.776 16.368 14.024C16.608 14.272 16.888 14.4 17.2 14.4C17.536 14.4 17.816 14.272 18.056 14.024C18.296 13.776 18.4 13.488 18.4 13.16V12C18.4 10.248 17.784 8.744 16.52 7.48C15.256 6.216 13.752 5.6 12 5.6C10.248 5.6 8.744 6.216 7.48 7.48C6.216 8.744 5.6 10.248 5.6 12C5.6 13.752 6.216 15.256 7.48 16.52C8.744 17.784 10.248 18.4 12 18.4H16V20H12C9.8 20 7.92 19.2 6.36 17.64C4.8 16.08 4 14.2 4 12C4 9.8 4.8 7.92 6.36 6.36C7.92 4.8 9.8 4 12 4Z" fill="#6EFFD9"/>
      </svg>`,
      inactive: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 14.4C12.648 14.4 13.2 14.16 13.688 13.688C14.16 13.2 14.4 12.648 14.4 12C14.4 11.352 14.16 10.8 13.688 10.312C13.2 9.84 12.648 9.6 12 9.6C11.352 9.6 10.8 9.84 10.312 10.312C9.84 10.8 9.6 11.352 9.6 12C9.6 12.648 9.84 13.2 10.312 13.688C10.8 14.16 11.352 14.4 12 14.4ZM12 4C14.2 4 16.08 4.8 17.64 6.36C19.2 7.92 20 9.8 20 12V13.16C20 13.96 19.72 14.64 19.2 15.2C18.64 15.736 18 16 17.2 16C16.24 16 15.448 15.6 14.848 14.8C14.048 15.6 13.104 16 12 16C10.904 16 9.96 15.6 9.168 14.832C8.4 14.04 8 13.104 8 12C8 10.904 8.4 9.96 9.168 9.168C9.96 8.4 10.904 8 12 8C13.104 8 14.04 8.4 14.832 9.168C15.6 9.96 16 10.904 16 12V13.16C16 13.488 16.128 13.776 16.368 14.024C16.608 14.272 16.888 14.4 17.2 14.4C17.536 14.4 17.816 14.272 18.056 14.024C18.296 13.776 18.4 13.488 18.4 13.16V12C18.4 10.248 17.784 8.744 16.52 7.48C15.256 6.216 13.752 5.6 12 5.6C10.248 5.6 8.744 6.216 7.48 7.48C6.216 8.744 5.6 10.248 5.6 12C5.6 13.752 6.216 15.256 7.48 16.52C8.744 17.784 10.248 18.4 12 18.4H16V20H12C9.8 20 7.92 19.2 6.36 17.64C4.8 16.08 4 14.2 4 12C4 9.8 4.8 7.92 6.36 6.36C7.92 4.8 9.8 4 12 4Z" fill="#9A9C9E"/>
      </svg>`
    }
  };


const ShootSection = styled.section<{ hasScrollbar: boolean; isExpanded: boolean }>`
  background-color: ${({ theme }) => theme.colors.grey80};
  padding: 15px;
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: ${({ hasScrollbar }) => (hasScrollbar ? 'auto' : 'hidden')};
  width: 520px;
  max-height: 230px;
  scrollbar-width: thin;
  scrollbar-color: ${({ theme }) => theme.colors.grey70} transparent;
  margin-top: -5px;
  border-radius: 4px;
  margin-bottom: ${({ isExpanded }) => (isExpanded ? '50px' : '0')};

  &::-webkit-scrollbar {
    width: ${({ hasScrollbar }) => (hasScrollbar ? '6px' : '0')};
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.grey60};
    border-radius: 10px;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
`;

const TabContainer = styled.div`
  display: flex;
  height: 44px;
  padding-bottom: 2px;
`;

const Tab = styled.button<{ active: boolean }>`
  background-color: ${({ active, theme }) => (active ? theme.colors.grey80 : 'transparent')};
  color: ${({ active, theme }) => (active ? theme.colors.white : theme.colors.grey60)};
  padding: 8px 16px;
  border: 1px solid ${({ theme }) => theme.colors.grey80};
  cursor: pointer;
  display: flex;
  align-items: flex-end;
  gap: 4px;
  border-radius: 3px;
  transition: background-color 0.3s ease;
`;

const TaskList = styled.div`
  display: flex;
  flex-direction: column;
`;

const TaskItem = styled.div`
  background-color: ${({ theme }) => theme.colors.grey80};
  display: flex;
  padding: 10px 8px;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey75};
`;

const TaskContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const TaskHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const NameText = styled(SmallDetailText)`
  color: ${({ theme }) => theme.colors.grey50};
  font-weight: bold;
`;

const MetadataText = styled(SmallDetailText)`
  color: ${({ theme }) => theme.colors.grey60};
`;

const TaskText = styled(SmallText)`
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
`;

const HighlightText = styled(SmallText)`
  color: ${({ theme }) => theme.colors.tint30};
  font-weight: bold;
  margin-right: 5px;
`;

const StatusButton = styled.button`
  background: ${({ theme }) => theme.colors.grey80};
  border: 1px solid ${({ theme }) => theme.colors.grey75};
  color: ${({ theme }) => theme.colors.grey40};
  width: 72px;
  height: 36px;
  cursor: pointer;
  padding: 6px 10px;
  display: flex;
  align-items: center;
  border-radius: 10px;
  position: relative;
`;

const ArrowIcon = styled.div`
  display: flex;
  align-items: center;
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const DropdownMenu = styled.div`
  position: absolute;
  width: 72px;
  height: 112px;
  top: 35px;
  left: 0px;
  background-color: ${({ theme }) => theme.colors.grey70};
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  z-index: 1;
  border: none;
  border-radius: 8px;
  padding: 1.5px;
`;

const DropdownItem = styled.button<{ selected?: boolean }>`
  width: 68px;
  height: 36px;
  background: ${({ selected, theme }) => (selected ? theme.colors.grey90 : 'transparent')};
  border: none;
  color: ${({ theme }) => theme.colors.white};
  padding: 6px;
  display: flex;
  align-items: center;
  gap: 3px;
  cursor: pointer;
  width: 100%;
  text-align: left;
  border-radius: 6px;
`;

const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
`;

export default ShootCommentSection;


