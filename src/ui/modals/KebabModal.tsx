import React, { useState } from 'react';
import styled from 'styled-components';
import DeleteModal from './DeleteModal';

interface KebabModalProps {
  onEdit: () => void;
  onConfirmDelete: () => void; 
}

const KebabModal: React.FC<KebabModalProps> = ({ onEdit, onConfirmDelete }) => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const handleCloseDeleteModal = () => {
    setIsDeleteModalOpen(false); 
  };

  return (
    <>
      <ModalContainer>
        <MenuItem onClick={onEdit}>Edit</MenuItem>
        <Divider />
        <MenuItem onClick={onConfirmDelete} isDelete>
          Delete
        </MenuItem>
      </ModalContainer>
      {isDeleteModalOpen && (
        <DeleteModal
          onConfirmDelete={() => {
            onConfirmDelete();
            handleCloseDeleteModal();
          }}
          onClose={handleCloseDeleteModal}
        />
      )}
    </>
  );
};

const ModalContainer = styled.div`
  position: absolute;
  bottom: 245px;
  right: 60px;
  background-color: ${({ theme }) => theme.colors.grey75};
  border-radius: 8px;
  box-shadow: 0px 16px 24px 10px rgba(0, 0, 0, 0.25);
  width: 85px;
  height: 69px;
  text-align: center;
`;

const MenuItem = styled.div<{ isDelete?: boolean }>`
  padding: 5px 6px;
  font-size: ${({ theme }) => theme.fontSize.small_detail};
  cursor: pointer;
  color: ${({ theme, isDelete }) => (isDelete ? theme.colors.warning : theme.colors.white)};
  text-align: center;
  font-weight: 500;
`;

const Divider = styled.div`
  height: 1px;
  background-color: ${({ theme }) => theme.colors.grey70};
`;

export default KebabModal;
