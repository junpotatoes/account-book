import Form from "react-bootstrap/Form";

function SelectBasicExample() {
  return (
    <Form.Select style={{ width: "75px" }} aria-label="Default select example">
      <option></option>
      <option value="1">식비</option>
      <option value="2">교통비</option>
      <option value="3">문화생활</option>
      <option value="4">패션/미용</option>
      <option value="5">생활용품</option>
      <option value="6">주거/통신</option>
      <option value="7">기타</option>
    </Form.Select>
  );
}

export default SelectBasicExample;
