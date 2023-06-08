import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { Modal } from './modal.component';
import { CloseButton, ModalContainer, Title } from './modal.styled';

type Props = {
  title: string;
  children: React.ReactNode;
  isModalVisible: boolean;
  onBackdropClick: () => void;
};

const BaseModal: React.FC<Props> = ({
  title,
  children,
  isModalVisible,
  onBackdropClick,
}) => {
  if (!isModalVisible) {
    return null;
  }

  return (
    <Modal onBackdropClick={onBackdropClick}>
      <ModalContainer>
        <CloseButton onClick={onBackdropClick}>
          <CloseIcon fontSize="small" />
        </CloseButton>
        <Title>{title}</Title>
        {children}
      </ModalContainer>
    </Modal>
  );
};

export { BaseModal };
