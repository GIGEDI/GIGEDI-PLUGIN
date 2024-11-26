import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { SmallDetailText, SmallText, MediumText } from '../styles/typo';
import LimitModal from '../modals/LimitModal';
import KebabModal from '../modals/KebabModal';
import DeleteModal from '../modals/DeleteModal';
import { ArchiveItem, BlockItem } from '../atoms/archiveItemsAtom';
import RealShootSection from './RealShootSection';
import { isRealShootSelectedAtom } from '../atoms/selectedAtom';
import { useRecoilState } from 'recoil';

interface BlockSectionProps {
  archive: ArchiveItem;
  goBack: () => void;
  setBlockCount: (count: number) => void;
  archiveTitle: string;
}

const BlockSection: React.FC<BlockSectionProps> = ({ archive, goBack, setBlockCount }) => {
  const [isCreating, setIsCreating] = useState(false);
  const [newBlock, setNewBlock] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [kebabMenuOpenIndex, setKebabMenuOpenIndex] = useState<number | null>(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedIndexForDelete, setSelectedIndexForDelete] = useState<number | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [selectedBlock, setSelectedBlock] = useState<BlockItem | null>(null);
  const [isRealShootSelected, setisRealShootSelected] = useRecoilState(isRealShootSelectedAtom); // New state to manage block selection
  const totalBlockCount = 20;

  useEffect(() => {
    setBlockCount(archive.blocks.length);
  }, [archive.blocks, setBlockCount]);

  const handleCreate = () => {
    if (archive.blocks.length >= 20) {
      setIsModalOpen(true);
    } else {
      setIsCreating(true);
    }
  };

  const handleSave = () => {
    if (newBlock.trim() === '') return;

    if (isEditing && editingIndex !== null) {
      const updatedBlocks = archive.blocks.map((block, index) =>
        index === editingIndex ? { ...block, text: newBlock } : block
      );
      archive.blocks = updatedBlocks;
    } else {
      const updatedBlocks = [...archive.blocks, { text: newBlock, count: 0, shoots: [] }];
      archive.blocks = updatedBlocks;
    }

    setNewBlock('');
    setIsCreating(false);
    setIsEditing(false);
    setEditingIndex(null);
    setBlockCount(archive.blocks.length);
  };

  const handleEdit = (index: number) => {
    setNewBlock(archive.blocks[index].text);
    setIsEditing(true);
    setEditingIndex(index);
    setKebabMenuOpenIndex(null);
  };

  const handleDelete = (index: number) => {
    setSelectedIndexForDelete(index);
    setIsDeleteModalOpen(true);
    setKebabMenuOpenIndex(null);
  };

  const confirmDelete = () => {
    if (selectedIndexForDelete !== null) {
      const updatedBlocks = archive.blocks.filter((_, i) => i !== selectedIndexForDelete);
      archive.blocks = updatedBlocks;
      setBlockCount(updatedBlocks.length);
      setSelectedIndexForDelete(null);
      setIsDeleteModalOpen(false);
    }
  };

  const handleDotsClick = (index: number, e: React.MouseEvent) => {
    e.stopPropagation(); 
    setKebabMenuOpenIndex(index === kebabMenuOpenIndex ? null : index);
  };

  const handleBlockSelect = (block: BlockItem) => {
    setisRealShootSelected(true);  // Set the block selected to true

    if (kebabMenuOpenIndex === null) { 
      setSelectedBlock(block);
    }
  };

  return (
    <>
    <Header>
     {/*<Title>{archive.text}</Title>*/}
     <CountContainer>
        <CountText>{archive.blocks.length}</CountText> 
        <SeparatorText>/</SeparatorText>
        <TotalCountText>{totalBlockCount}</TotalCountText> 
      </CountContainer>
    </Header>

        {!selectedBlock ? (
          <>
          <BlockWrapper>
            <BlockContent hasScrollbar={archive.blocks.length > 5}>
              <CreateButton onClick={handleCreate} disabled={archive.blocks.length >= 20}>+ Create</CreateButton>
              {(isCreating || isEditing) && (
                <InputContainer>
                  <StyledInput placeholder="New Block" value={newBlock} onChange={(e) => setNewBlock(e.target.value)} />
                  <CancelButton onClick={() => {
                    setIsCreating(false);
                    setIsEditing(false);
                    setNewBlock('');
                  }}>Cancel</CancelButton>
                  <SaveButton onClick={handleSave}>Save</SaveButton>
                </InputContainer>
              )}
              {archive.blocks.map((block, index) => (
                <BlockItem key={index} onClick={() => handleBlockSelect(block)}>
                  <BlockText>
                    {block.text}
                    {/* 추후 읽음 여부에 따라 svg 코드 조건 추가*/}
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.4857 19.787C11.6221 19.9234 11.8071 20 12 20H12.3636C12.5455 20 12.7273 19.9273 12.8727 19.7891L15.5636 17.0909H18.5455C18.9312 17.0909 19.3012 16.9377 19.574 16.6649C19.8468 16.3921 20 16.0221 20 15.6364V12H19.2C18.9757 12 18.7567 11.9769 18.5455 11.933V15.6364H14.9673L12.7273 17.8764V15.6364H8.36364V8.36364H16V8C16 7.62181 16.0525 7.25588 16.1506 6.90909H8.36364C7.56364 6.90909 6.90909 7.55636 6.90909 8.36364V15.6364C6.90909 16.0221 7.06234 16.3921 7.33512 16.6649C7.6079 16.9377 7.97787 17.0909 8.36364 17.0909H11.2727V19.2727C11.2727 19.4656 11.3494 19.6506 11.4857 19.787ZM16.9143 5.45455H5.45455V14.1818H4V5.45455C4 5.06878 4.15325 4.69881 4.42603 4.42603C4.69881 4.15325 5.06878 4 5.45455 4H17.0909V5.25459C17.0299 5.31924 16.971 5.38593 16.9143 5.45455Z" fill="#D7D7D9"/>
                    <rect x="17" y="5" width="6" height="6" rx="3" fill="#21F5BE"/>
                    </svg>
                    <BlockCountText>{block.count}</BlockCountText>
                  </BlockText>
                  <DotsIcon onClick={(e) => handleDotsClick(index, e)}>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M6 12C6 12.5304 5.78929 13.0391 5.41421 13.4142C5.03914 13.7893 4.53043 14 4 14C3.46957 14 2.96086 13.7893 2.58579 13.4142C2.21071 13.0391 2 12.5304 2 12C2 11.4696 2.21071 10.9609 2.58579 10.5858C2.96086 10.2107 3.46957 10 4 10C4.53043 10 5.03914 10.2107 5.41421 10.5858C5.78929 10.9609 6 11.4696 6 12Z" />
                      <path d="M21.4142 13.4142C21.7893 13.0391 22 12.5304 22 12C22 11.4696 21.7893 10.9609 21.4142 10.5858C21.0391 10.2107 20.5304 10 20 10C19.4696 10 18.9609 10.2107 18.5858 10.5858C18.2107 10.9609 18 11.4696 18 12C18 12.5304 18.2107 13.0391 18.5858 13.4142C18.9609 13.7893 19.4696 14 20 14C20.5304 14 21.0391 13.7893 21.4142 13.4142Z" />
                      <path d="M13.4142 13.4142C13.7893 13.0391 14 12.5304 14 12C14 11.4696 13.7893 10.9609 13.4142 10.5858C13.0391 10.2107 12.5304 10 12 10C11.4696 10 10.9609 10.2107 10.5858 10.5858C10.2107 10.9609 10 11.4696 10 12C10 12.5304 10.2107 13.0391 10.5858 13.4142C10.9609 13.7893 11.4696 14 12 14C12.5304 14 13.0391 13.7893 13.4142 13.4142Z" />
                    </svg>
                  </DotsIcon>
                  {kebabMenuOpenIndex === index && (
                    <KebabModal
                      onEdit={() => handleEdit(index)}
                      onConfirmDelete={() => handleDelete(index)}
                    />
                  )}
                </BlockItem>
              ))}
            </BlockContent>
            {isModalOpen && <LimitModal highlightText="BLOCKS" onClose={() => setIsModalOpen(false)} />}
            {isDeleteModalOpen && <DeleteModal highlightText="BLOCKS" onConfirmDelete={confirmDelete} onClose={() => setIsDeleteModalOpen(false)} />}
          </BlockWrapper>
          </>
        ) : (
          // false-> true로 바꾸는 상태변수를 넣고싶어
          <RealShootSection 
             shoots={selectedBlock.shoots}  
             selectedBlockTitle={selectedBlock.text} 
             goBack={() => {
              setisRealShootSelected(false);
              setSelectedBlock(null);}}
           />

        )}
    </>
  );
};

const BlockWrapper = styled.div`
  width: 520px;
  height: 368px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.grey80};
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  maring-left: -10px;
  position: relative;
  bottom: 8px;
`;

const CountContainer = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: -40px;
  left: 480px;
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

const BlockContent = styled.div<{ hasScrollbar: boolean }>`
  border: 1px solid ${({ theme }) => theme.colors.grey80};
  padding-left: ${({ hasScrollbar }) => (hasScrollbar ? '12px' : '0')}; 
  padding-top: 12px;
  border-radius: 6px;
  flex: 1;
  overflow-y: auto;
  height: 400px;
  scrollbar-width: thin;
  scrollbar-color: ${({ theme }) => theme.colors.grey70} transparent;

  &::-webkit-scrollbar {
    width: ${({ hasScrollbar }) => (hasScrollbar ? '6px' : '0')};
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.grey60};
    border-radius: 10px;
  }

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BlockItem = styled.div`
  background-color: ${({ theme }) => theme.colors.grey80};
  width: 100%;
  height: 60px !important; 
  padding: 12px 16px;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.grey70};
  margin-bottom: 8px;
  max-width: 496px;
  flex-shrink: 0;
`;

const BlockText = styled(SmallText)`
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  gap: 8px;
`;

const BlockCountText = styled(SmallText)`
  color: ${({ theme }) => theme.colors.white};
  margin-left: -3px;
`;

const DotsIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;

  svg {
    fill: #525658;
    width: 16px;
    height: 16px;
  }
`;

const CreateButton = styled(MediumText)<{ disabled: boolean }>`
  background-color: ${({ theme, disabled }) =>
    disabled ? theme.colors.grey60 : 'transparent'};
  color: ${({ theme, disabled }) => (disabled ? theme.colors.white : theme.colors.tint20)};
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.colors.grey60};
  border-radius: 8px;
  cursor: pointer;
  width: 100%;
  height: 48px;
  text-align: center;
  margin-bottom: 8px;
  max-width: 496px;
  flex-shrink: 0;
`;

const InputContainer = styled.div`
  display: flex;
  gap: 8px;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.colors.base}; 
  padding: 10px;
  margin-bottom: 8px;
  width: 100%;
  max-width: 496px;
  height: 60px;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

const StyledInput = styled.input`
  width: 338px;
  height: 37px;
  border: 1px solid ${({ theme }) => theme.colors.grey75};
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors.grey80};
  color: ${({ theme }) => theme.colors.white};
  padding: 8px 10px;
  font-size: ${({ theme }) => theme.fontSize.small};
  font-family: inherit;
  outline: none;

  &::placeholder {
    color: ${({ theme }) => theme.colors.grey50};
  }
`;

const CancelButton = styled.button`
  padding: 8px 10px;
  width: 65px;
  height: 37px;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.colors.grey60};
  background-color: transparent;
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
`;

const SaveButton = styled.button`
  padding: 8px 10px;
  width: 53px;
  height: 37px;
  border-radius: 6px;
  border: none;
  background-color: ${({ theme }) => theme.colors.tint30}; 
  color: ${({ theme }) => theme.colors.black}; 
  font-weight: 700;
  cursor: pointer;
`;


export default BlockSection;
