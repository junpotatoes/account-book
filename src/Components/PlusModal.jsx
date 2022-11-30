import React, { useState } from "react";
import Datepicker from "./Datepicker";
import CreateBox from "./CreateBox";

import "../css/Modal.css";

export default function PlusModal() {
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
              <CreateBox />
            </div>
            <div className="under__Box">
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
