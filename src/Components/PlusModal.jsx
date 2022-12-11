import React, { useEffect, useState } from "react";
import Datepicker from "./Datepicker";

import IncomeDropdown from "./IncomeDropdown";

import "../css/Modal.css";

function PlusModal({exit, setExit}) {
  const [price, setPrice] = useState("");
  const [content, setContent] = useState("");
  const [modal, setModal] = useState(false);
  const [date, setDate] = useState("");
  const [title, setTitle] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    fetch("http://localhost:4000/2022", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        value: "income",
        price: price,
        content: content,
        date: date,
        title: title,
      }),
    }).then((res) => {
      if (res.ok) {
        alert("post 완료!");
      }
    });
    setExit(!exit);
  }

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  const handleSetPrice = (event) => {
    let e = event.target.value;
    setPrice(e);
  };

  const handleSetContent = (event) => {
    let e = event.target.value;
    setContent(e);
  };

  const data = (e) => {
    e.preventDefault();

    let price = e.target.price.value;
    let content = e.target.content.value;
  };

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
                <Datepicker setDate={setDate} />
              </div>
            </div>
            <div className="scroll__Box">
              <div className="modal__Content__Box">
                <div className="Box__Wrapper">
                  <div className="Box__Content">
                    <span>분류</span>
                    <span className="Dropdown">
                      <IncomeDropdown setTitle={setTitle} />
                    </span>
                  </div>
                  <div className="Box__Content">
                    <span>금액</span>
                    <input
                      value={price}
                      onChange={handleSetPrice}
                      type={"text"}
                      className="underline"
                    ></input>
                    <span>원</span>
                  </div>
                  <div className="Box__Content">
                    <span>내용</span>
                    <input
                      value={content}
                      onChange={handleSetContent}
                      type={"text"}
                      className="underline"
                    ></input>
                  </div>
                </div>
              </div>
            </div>
            <div className="under__Box">
              <div className="option">
                <button onClick={handleSubmit} className="save__Modal">
                  저장
                </button>
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
export default PlusModal;
