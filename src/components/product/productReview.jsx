import { useState } from "react";
import { Rating } from "../common/rating";

const ProductReview = ({ product }) => {
  const [activeTab, setActiveTab] = useState("description");
  return (
    <>
      <div className="d-flex gap-3 mb-3">
        <button
          className={`main-btn ${activeTab === "description" ? "active-btn" : ""}`}
          onClick={() => setActiveTab("description")}
        >
          Description
        </button>
        <button
          className={`main-btn ${activeTab === "reviews" ? "active-btn" : ""}`}
          onClick={() => setActiveTab("reviews")}
        >
          Reviews
        </button>
      </div>
      {activeTab === "description" && <p>{product.description}</p>}
      {activeTab === "reviews" &&
        product.reviews.map((review, index) => (
          <div key={index} className="mb-3">
            <p className="mb-1">{review.customName}</p>
            <Rating ratings={review.customRating} />
            <p className="mt-1">{review.customReview}</p>
          </div>
        ))}
    </>
  );
};

export default ProductReview;
