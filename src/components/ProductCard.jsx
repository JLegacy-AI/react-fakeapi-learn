import React from "react";

const ProductCard = ({ title, image, price }) => {
  let newTitle = title.split(" ").slice(0, 3).join(" ");
  return (
    <>
      <div className="card col-md-3 col-10 mt-5 mx-3 shadow-lg border-0">
        <div
          className="w-100 h-100 d-flex justify-content-center align-items-center "
          style={{
            minHeight: "250px",
          }}
        >
          <img
            className="mx-auto img-thumbnail border-0"
            src={image}
            width="100px"
            height="auto"
          />
        </div>
        <div className="card-body text-center mx-auto">
          <div className="cvp">
            <h5 className="card-title font-weight-bold">{newTitle}</h5>
            <p className="card-text">${price}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
