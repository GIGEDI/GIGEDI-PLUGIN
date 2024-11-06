import React from 'react';
import styled from 'styled-components';
import { SmallDetailText } from '../styles/typo';

interface InfoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const InfoModal: React.FC<InfoModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <Overlay onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <TextContent>
          <SmallDetailText>
            <strong>"After 60 days</strong>, your SHOOT will <strong>no longer be visible</strong> in OUR SHOOT. <br />
            If you want to keep it, please update its status to make it visible again."
          </SmallDetailText>
        </TextContent>
      </ModalContainer>
    </Overlay>
  );
};

const Overlay = styled.div`
  position: fixed;
  top: 86px;
  left: 75px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContainer = styled.div`
  background: ${({ theme }) => theme.colors.grey70};
  opacity: 0.96;
  padding: 0 18px; 
  border-radius: 10px;
  width: 431px;
  height: 64px; 
  box-shadow: 0px 16px 24px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center; 
  justify-content: center; 
  text-align: center;
`;

const TextContent = styled.div`
  color: ${({ theme }) => theme.colors.white};
  line-height: 1.4;
  
  strong {
    font-weight: 600;
  }
`;

export default InfoModal;
