import React, { useState } from "react";
import Modal from "react-modal";

export default function Cpage() {
  const [modalIsOpen, setmodalIsOpen] = useState(false);
  return (
    <>
      <div className="modal1">
        <img
          src="/image/search.png"
          alt="img"
          className="h-5"
          onClick={() => setmodalIsOpen(true)}
        />
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={() => setmodalIsOpen(false)}
        >
          <div className="modal2">
            <img
              src="/image/close1.png"
              alt="img"
              className="h-10 w-10 "
              onClick={() => setmodalIsOpen(false)}
            />
            <div className="modal3">
              <div className="mfmodal">
                <input
                  type="text"
                  placeholder="SEARCH"
                  className="mtectbox"
                ></input>
                <img src="/image/search.png" alt="img" className="h-10" />
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </>
  );
}
