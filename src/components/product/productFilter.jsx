import Form from "react-bootstrap/Form";
const ProductFilter = ({ search, setSearch }) => {
  return (
    <Form className="search-bar">
      <Form.Control
        type="text"
        placeholder="Search"
        className="p-2"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </Form>
  );
};
export default ProductFilter;
