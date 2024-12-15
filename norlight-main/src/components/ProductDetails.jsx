import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const ProductDetails = () => {
  const { id } = useParams();
  const { data, error, loading } = useFetch(`https://fakestoreapi.com/products/${id}`); 

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img
            className="w-full h-96 object-contain"
            src={data.image}
            alt={data.title}
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-gray-900">{data.title}</h2>
          <p className="text-lg mt-2 text-gray-600">{data.description}</p>
          <div className="mt-4">
            <span className="text-xl font-bold text-gray-900">${data.price}</span>
          </div>
          <div className="mt-4 flex items-center space-x-4">
            <button
              className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow-md"
              onClick={() => alert("Added to cart")}
            >
              Add to Cart
            </button>
            <button className="text-blue-500 text-xl">
              <i className="fa fa-heart"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
