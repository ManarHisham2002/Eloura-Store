import Form from "react-bootstrap/Form";

const Input = ({ label, type, placeholder }) => {
  return (
    <Form.Group className="mb-4" controlId={label}>
      <Form.Label className="fw-semibold text-uppercase">{label}</Form.Label>
      <Form.Control
        type={type}
        placeholder={placeholder}
        className="p-3 mt-3 shadow-sm border-0"
      />
    </Form.Group>
  );
};

export default Input;
