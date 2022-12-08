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
      <option value="식비">식비</option>
      <option value="교통비">교통비</option>
      <option value="문화생활">문화생활</option>
      <option value="패션/미용">패션/미용</option>
      <option value="생활용품">생활용품</option>
      <option value="주거/통신">주거/통신</option>
      <option value="기타">기타</option>
    </Form.Select>
  );
}

export default SelectBasicExample;
