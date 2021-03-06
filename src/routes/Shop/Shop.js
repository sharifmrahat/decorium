import React from "react";
import Product from "../../components/Product/Product";

import useProducts from "../../hooks/useProducts";

const Shop = ({ addToCart }) => {
  const [products] = useProducts([]);

  return (
    <section>
      <h3 className="inline-block text-xl font-bold my-5 bg-yellow-400 px-10 py-2 rounded-md">
        Latest Products
      </h3>
      <div className="my-5">
        {!products ? (
          <p>Data is loading</p>
        ) : (
          <div className="grid md:grid-cols-5 gap-10 px-5 md:px-10 justify-center items-center">
            {products.map((product) => (
              <Product
                product={product}
                key={product.id}
                addToCart={addToCart}
              ></Product>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Shop;
