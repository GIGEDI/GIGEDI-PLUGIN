import React from 'react';
import styled from 'styled-components';

interface DeleteModalProps {
  onConfirmDelete: () => void;
  onClose: () => void;
}

const DeleteModal: React.FC<DeleteModalProps> = ({ onConfirmDelete, onClose }) => {
  return (
    <ModalOverlay>
      <ModalContainer>
        <ModalContent>
          <Title>DELETE THIS ARCHIVE?</Title>
          <Description>
            Once deleted, all contents <br />
            included in the ARCHIVE will <br />
            be permanently removed.
          </Description>
        </ModalContent>
        <ButtonWrapper>
          <DeleteButton onClick={onConfirmDelete}>Delete</DeleteButton>
          <DividerVertical />
          <CancelButton onClick={onClose}>No</CancelButton>
        </ButtonWrapper>
      </ModalContainer>
    </ModalOverlay>
  );
};

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

const ModalContainer = styled.div`
  width: 280px;
  background-color: ${({ theme }) => theme.colors.grey75};
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
`;

const ModalContent = styled.div`
  padding: 24px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey70};
`;

const Title = styled.div`
  font-size: ${({ theme }) => theme.fontSize.medium};
  color: ${({ theme }) => theme.colors.white};
  font-weight: 700;
  margin-bottom: 12px;
`;

const Description = styled.p`
  font-size: ${({ theme }) => theme.fontSize.small_detail};
  color: ${({ theme }) => theme.colors.white};
  line-height: 1.4;
`;

const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`;

const DeleteButton = styled.button`
  flex: 1;
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.warning};
  font-size: ${({ theme }) => theme.fontSize.medium};
  font-weight: 700;
  cursor: pointer;
  padding: 16px 0;
  text-align: center;
`;

const DividerVertical = styled.div`
  width: 1px;
  background-color: ${({ theme }) => theme.colors.grey70};
  height: 55px;
`;

const CancelButton = styled.button`
  flex: 1;
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.medium};
  cursor: pointer;
  padding: 16px 0;
  text-align: center;
`;

export default DeleteModal;
