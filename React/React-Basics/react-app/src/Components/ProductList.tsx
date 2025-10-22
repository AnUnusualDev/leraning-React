import React, { useEffect, useState } from "react";
import { string } from "zod";

const ProductList = ({ category }: { category: string }) => {
  const [products, setProducts] = useState<string[]>([]);

  useEffect(() => {
    console.log("Fetching Products in", category);
    setProducts(["Clothin", "Household"]);
  }, [category]);
  return <div>ProductList</div>;
};

export default ProductList;
