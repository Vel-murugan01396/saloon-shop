import React, { useState } from "react";
import Modal from "react-modal";

export default function CartOption() {
  const [modalIsOpen, setmodalIsOpen] = useState(false);
  return (
    <>
      <div className="modal1">
        <img
          src="/image/cart.png"
          alt="img"
          className="h-5"
          onClick={() => setmodalIsOpen(true)}
        />
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={() => setmodalIsOpen(false)}
        >
          <div className="modacart">
            <img
              src="/image/close1.png"
              alt="img"
              className="h-6 w-6 ml-auto mt-4 p-1"
              onClick={() => setmodalIsOpen(false)}
            />
            <div></div>
          </div>
        </Modal>
      </div>
    </>
  );
}
