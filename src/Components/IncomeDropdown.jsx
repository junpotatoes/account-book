import Form from "react-bootstrap/Form";

function SelectBasicExample({ setTitle }) {
  const date = (e) => {
    setTitle(e.target.value);
  };

  return (
    <Form.Select
      onChange={date}
      style={{ width: "75px" }}
      aria-label="Default select example"
    >
      <option></option>
      <option value="월급">월급</option>
      <option value="부수입">부수입</option>
      <option value="용돈">용돈</option>
      <option value="상여금">상여금</option>
      <option value="금융소득">금융소득</option>
      <option value="기타">기타</option>
    </Form.Select>
  );
}

export default SelectBasicExample;
