import { useEffect, useState } from 'react';
import ItemProduct from './ItemProduct';
import { getProducts } from '../services/productServices';
import ShoppingCart from './ShoppingCart';

export default function ProductsSection() {
  const [data, setData] = useState([]);

  const findAll = async () => {
    const products = await getProducts();
    setData(products);
  };

  useEffect(() => {
    findAll();
  }, []);
  return (
    <>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Productos en venta
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {data.map((product) => (
              <div key={product.id}>
                <ItemProduct
                  id={product.id}
                  name={product.name}
                  description={product.description}
                  price={product.price}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <ShoppingCart openCart={false} closeCart={true} />
    </>
  );
}
