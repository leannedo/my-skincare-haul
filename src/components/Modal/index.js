import React from "react";
import { Modal as AntModal } from "antd";
import "./Modal.css";

const Modal = ({
  title,
  visibility,
  close,
  footer,
  width,
  wrapClassName,
  children,
}) => {
  return (
    <>
      <AntModal
        centered
        title={title}
        visible={visibility}
        onCancel={close}
        footer={footer}
        width={width}
        wrapClassName={wrapClassName}
      >
        {children}
      </AntModal>
    </>
  );
};

export default Modal;
