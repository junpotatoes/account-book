import Form from "react-bootstrap/Form";

function SelectBasicExample() {
  return (
    <Form.Select style={{ width: "75px" }} aria-label="Default select example">
      <option></option>
      <option value="1">월급</option>
      <option value="2">부수입</option>
      <option value="3">용돈</option>
      <option value="4">상여금</option>
      <option value="5">금융소득</option>
      <option value="6">기타</option>
    </Form.Select>
  );
}

export default SelectBasicExample;
