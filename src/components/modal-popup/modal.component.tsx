import React from 'react';
import ReactDOM from 'react-dom';
import { Overlay } from './modal.styled';

type Props = {
  children: React.ReactNode;
  onBackdropClick: () => void;
};

const Modal: React.FC<Props> = ({ children, onBackdropClick }) => {
  const StopPropagationOnClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  return ReactDOM.createPortal(
    <Overlay onClick={onBackdropClick}>
      <div onClick={StopPropagationOnClick} role="button" tabIndex={0}>
        {children}
      </div>
    </Overlay>,
    document.getElementById('modal-root') as HTMLElement,
  );
};

export { Modal };
