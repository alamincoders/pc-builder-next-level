import Image from "next/image";
import React from "react";

const CPU = ({ products }) => {
  // console.log(products);
  return (
    <div className="mt-16 p-2">
      <h2 className="text-3xl font-semibold mb-5 ">CPU Details</h2>
      {products.map((product) => (
        <div key={product.id}>
          {" "}
          <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-8 lg:gap-10">
            <div className="overflow-hidden">
              <Image width={500} height={500} className="w-full h-full" src={product.image} alt="" />
            </div>
            <div className="space-y-5">
              <div className="badge badge-secondary">{product.category}</div>
              <h2 className="text-4xl font-semibold">{product.productName}</h2>

              <div className="card-actions mt-2">
                <div className="badge badge-outline">Status: {product.status.toString()}</div>
                <div className="badge badge-outline">Rating: {product.averageRating}</div>
                <div className="badge badge-outline">Price: ${product.price}</div>
              </div>
              <p>{product.description}</p>
              <h2 className="font-medium text-lg">Key Features:</h2>
              <ul className="md:ml-5">
                <li className="list-disc">Brand: {product.keyFeatures?.brand}</li>
                <li className="list-disc">Model: {product.keyFeatures?.model}</li>
                <li className="list-disc">Socket: {product.keyFeatures?.socket}</li>
                <li className="list-disc">Cores: {product.keyFeatures?.cores}</li>
                <li className="list-disc">Threads: {product.keyFeatures?.threads}</li>
                <li className="list-disc">Base Clock: {product.keyFeatures?.baseClock}</li>
                <li className="list-disc">Max Boost Clock: {product.keyFeatures?.maxBoostClock}</li>
                <li className="list-disc">Cache: {product.keyFeatures?.cache}</li>
                <li className="list-disc">TDP: {product.keyFeatures?.tdp}</li>
                <li className="list-disc">Architecture: {product.keyFeatures?.architecture}</li>
              </ul>
            </div>
          </div>
          {
            <div>
              <h2 className="font-semibold text-4xl my-5">Reviews: </h2>
              {product.reviews.map((review) => (
                <div key={review.id} className="rounded-2xl">
                  <div className=" w-full my-5 lg:m-5 shadow ">
                    <h2 className="space-x-3 lg:space-x-20 lg:text-xl font-medium bg-[#F3F6FA] p-8 ">
                      <span className="border-r pr-3 lg:pr-20">User: {review.user}</span>
                      <span>Rating: {review.rating}</span>
                    </h2>

                    <p className="bg-white mt-3 px-8 pb-10">{review.comment}</p>
                  </div>
                </div>
              ))}
            </div>
          }
        </div>
      ))}
    </div>
  );
};

export default CPU;
