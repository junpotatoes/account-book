import React, { useState } from "react";
import Dropdown from "./Dropdown";
import Datepicker from "./Datepicker";

import "../css/Modal.css";

export default function Modal() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
        수입
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <div className="modal__Top__Box">
              <div className="datePicker">
                <Datepicker />
              </div>
            </div>
            <div className="scroll__Box">
              <div className="modal__Content__Box">
                <div className="Box__Wrapper">
                  <div className="Box__Content">
                    <span>분류</span>
                    <span className="Dropdown">
                      <Dropdown />
                    </span>
                  </div>
                  <div className="Box__Content">
                    <span>금액</span>
                    <div className="underline"></div>
                  </div>
                  <div className="Box__Content">
                    <span>내용</span>
                    <div className="underline"></div>
                  </div>
                </div>
              </div>
              <div className="modal__Content__Box">
                <div className="Box__Wrapper">
                  <div className="Box__Content">
                    <span>분류</span>
                    <span className="Dropdown">
                      <Dropdown />
                    </span>
                  </div>
                  <div className="Box__Content">
                    <span>금액</span>
                    <div className="underline"></div>
                  </div>
                  <div className="Box__Content">
                    <span>내용</span>
                    <div className="underline"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="under__Box">
              <buton className="plus">+</buton>
              <div className="option">
                <button className="save__Modal">저장</button>
                <button className="close__Modal" onClick={toggleModal}>
                  취소
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
