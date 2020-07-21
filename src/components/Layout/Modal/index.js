import React from "react";
import { Modal as AntModal } from "antd";
import "./Modal.css";

const Modal = (props) => {
  return (
    <>
      <AntModal
        centered
        title={props.title}
        visible={props.visibility}
        onCancel={props.close}
        footer={props.footer}
        width={props.width}
        wrapClassName={props.wrapClassName}
      >
        {props.children}
      </AntModal>
    </>
  );
};

export default Modal;
