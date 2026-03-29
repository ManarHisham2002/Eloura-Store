import { useState } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import ProductCategory from "../components/product/productCategory";
import ProductFilter from "../components/product/productFilter";
import products from "../data/products";
import ProductCard from "../components/product/productCard";
import { randomProducts } from "../context/randomProducts";
import NotFound from "./notFound";

const Products = () => {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [visibleCount, setVisibleCount] = useState(6);

  const baseProducts = selectedCategory
    ? products.filter((p) => p.category === selectedCategory)
    : products;

  const searchValue = search.toLowerCase();
  const filteredProducts = baseProducts.filter(
    (product) =>
      product.name.toLowerCase().includes(searchValue) ||
      product.category.toLowerCase().includes(searchValue) ||
      product.salary.toString().includes(search),
  );
  let displayedProducts = [];
  if (search) {
    displayedProducts = filteredProducts;
  } else {
    displayedProducts = randomProducts(baseProducts, visibleCount);
  }
  return (
    <div className="d-flex justify-content-center p-5">
      <Container>
        <Row>
          <Col sm={12}>
            <Row>
              <Col xs={12} md={6} className="order-2 order-md-1 mb-5">
                <ProductCategory
                  selectedCategory={selectedCategory}
                  setSelectedCategory={(value) => {
                    setSelectedCategory(value);
                    setVisibleCount(6); // reset لما تغير الكاتيجوري
                  }}
                />
              </Col>

              <Col xs={12} md={6} className="order-1 order-md-2 mb-5">
                <ProductFilter search={search} setSearch={setSearch} />
              </Col>
            </Row>
          </Col>

          {search && filteredProducts.length === 0 && (
            <NotFound text="product" />
          )}

          <Col sm={12}>
            <Row xs={1} md={4} className="justify-content-evenly gap-4">
              {displayedProducts.map((product) => (
                <Col key={product.id}>
                  <ProductCard product={product} />
                </Col>
              ))}
            </Row>
          </Col>
          
          {!search && (
            <div className="text-end mt-5">
              <Button className="main-btn" onClick={() => setVisibleCount((prev) => prev + 3)}>
                Show More
              </Button>
            </div>
          )}
        </Row>
      </Container>
    </div>
  );
};

export default Products;
