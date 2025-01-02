"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-5xl font-extrabold">Loading...</div>
      </div>
    );
  }

  return (
    <div className="p-4">
      <h1 className="text-3xl font-extrabold mb-6 text-center">
        CLIENT-SIDE DATA FETCHING
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="border border-gray-200 rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow"
          >
            <div className="relative w-full h-40 mb-4">
              <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
            <p className="text-gray-700 text-base mb-2">
              Price: <span className="font-bold">${product.price}</span>
            </p>
            <button className="w-full bg-black text-white py-2 rounded-md hover:bg-orange-700 transition-colors">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
