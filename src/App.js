import React, { useEffect, useState } from "react";
import axios from "axios";
import { getLimitProducts } from "./utils/constant";
import ProductContainer from "./components/ProductContainer";
const App = () => {
  const [products, setProducts] = useState([]);
  const [limit, setLimit] = useState(10);

  useEffect(() => {
    axios
      .get(getLimitProducts(limit))
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [limit]);

  return (
    <div>
      <ProductContainer products={products} setLimit={setLimit} />
    </div>
  );
};

export default App;
