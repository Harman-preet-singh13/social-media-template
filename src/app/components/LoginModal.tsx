import React, { ReactNode } from "react";
import Modal from "react-modal";



type LoginModalProps = {
  isOpen: boolean;
  onRequestClose: () => void;
  contentLabel: string;
  children: ReactNode;
};

function LoginModal({ isOpen, onRequestClose, contentLabel, children }:LoginModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel={contentLabel}
      overlayClassName="modal-overlay"
      className="modal-content"
    >
      {children}
    </Modal>
  );
}

export default LoginModal;
