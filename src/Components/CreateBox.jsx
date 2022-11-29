import { useState } from "react";
import Dropdown from "./Dropdown";

function CreateBox() {
  const [val, setVal] = useState([]);
  const handleAdd = () => {
    const abc = [...val, []];
    setVal(abc);
  };

  return (
    <>
      {val.map((data, i) => {
        return (
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
        );
      })}
      <button className="plus" onClick={() => handleAdd()}>
        +
      </button>
    </>
  );
}

export default CreateBox;
