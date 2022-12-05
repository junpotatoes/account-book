import React, { useState } from "react";
import Datepicker from "./Datepicker";

import IncomeDropdown from "./IncomeDropdown";

import "../css/Modal.css";

function PlusModal() {
  const [val, setVal] = useState([]);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [content, setContent] = useState("");
  const [modal, setModal] = useState(false);
  // const [date, setDate] = use

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }
  const [data, setData] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = [
      {
        date: title,
        price,
        content,
      },
    ];
    const getData = JSON.parse(localStorage.getItem("priceInLocal")) ?? [];
    localStorage.setItem("priceInLocal", JSON.stringify([...getData, ...data]));
  };

  const handleAdd = () => {
    const abc = [...val, []];
    setVal(abc);
  };

  const handleSetPrice = (data) => {
    setPrice(data);
    console.log(price);
  };

  const handleSetContent = (data) => {
    setContent(data);
    console.log(content);
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
                <Datepicker />
              </div>
            </div>
            <div className="scroll__Box">
              {val.map((data, i) => {
                return (
                  <div className="modal__Content__Box">
                    <div className="Box__Wrapper">
                      <div className="Box__Content">
                        <span>분류</span>
                        <span className="Dropdown">
                          <IncomeDropdown />
                        </span>
                      </div>
                      <div className="Box__Content">
                        <span>금액</span>
                        <input
                          //   value={price}
                          onChange={(e) => handleSetPrice(e.target.value)}
                          type={"text"}
                          className="underline"
                        ></input>
                        <span>원</span>
                      </div>
                      <div className="Box__Content">
                        <span>내용</span>
                        <input
                          //   value={content}
                          onChange={(e) => handleSetContent(e.target.value)}
                          type={"text"}
                          className="underline"
                        ></input>
                      </div>
                    </div>
                  </div>
                );
              })}
              <button className="plus" onClick={() => handleAdd()}>
                +
              </button>
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
