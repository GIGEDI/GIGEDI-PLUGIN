import React from 'react';
import styled from 'styled-components';

interface LimitModalProps {
  highlightText: string;
  onClose: () => void;
}

const LimitModal: React.FC<LimitModalProps> = ({ highlightText, onClose }) => {
  return (
    <ModalOverlay>
      <ModalContainer>
        <ModalContent>
          <Description>
          You cannot create more <br />
          than <HighlightText>20 {highlightText}</HighlightText>.
          </Description>
        </ModalContent>
        <ButtonWrapper>
          <Button onClick={onClose}>Got it</Button>
        </ButtonWrapper>
      </ModalContainer>
    </ModalOverlay>
  );
};

const ModalOverlay = styled.div`
  position: fixed;
  top: -50px;
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
  height: 168px;
  background-color: ${({ theme }) => theme.colors.grey75};
  border-radius: 10px;
  padding: 42px 0px;
  text-align: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
`;

const ModalContent = styled.div`
  margin-bottom: 25px;
`;

const HighlightText = styled.strong`
  font-weight: 700;
`;

const Description = styled.p`
  font-size: ${({ theme }) => theme.fontSize.small};
  color: ${({ theme }) => theme.colors.white};
`;

const ButtonWrapper = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.grey70}; 
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  padding: 11px 0px;
  border: none;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSize.medium};
  width: 100%;
  font-weight: 700;
  margin-top: 4px;
`;

export default LimitModal;

