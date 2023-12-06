import React from "react";
import ProductCard from "./ProductCard";

const ProductContainer = ({ products, setLimit }) => {
  function incrementLimit() {
    setLimit((prevLimit) => prevLimit + 4);
  }

  return (
    <div className="d-flex justify-content-center  row gap-4 py-5">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          title={product.title}
          image={product.image}
          price={product.price}
        />
      ))}
      <button
        onClick={() => incrementLimit()}
        className="card col-md-3 col-10 mt-5 mx-3 shadow-lg border-0 d-flex justify-content-center align-items-center font-weight-bold text-xl-center bg-primary text-white"
      >
        Add More
      </button>
    </div>
  );
};

export default ProductContainer;
