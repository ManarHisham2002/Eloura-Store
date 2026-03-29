import Dropdown from "react-bootstrap/Dropdown";
const ProductCategory = ({ selectedCategory, setSelectedCategory }) => {
  const category = [
    "birth",
    "decorations",
    "engagement",
    "female",
    "furniture",
    "games",
    "joy",
    "kids",
    "male",
  ];
  return (
    <Dropdown>
      <Dropdown.Toggle className="main-btn p-2 ps-3 pe-3" id="dropdown-basic">
        {selectedCategory || "Category"}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item
          className="p-2 ps-3"
          onClick={() => setSelectedCategory("")}
        >
          All Categories
        </Dropdown.Item>

        {category.map((item, index) => (
          <Dropdown.Item
            key={index}
            className="p-2 ps-3"
            onClick={() => setSelectedCategory(item)}
          >
            {item}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};
export default ProductCategory;
