/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
const FeaturedCard = ({ products, title, categoryName }) => {
  return (
    <div className="text-center mt-16">
      <div className="space-y-3">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-5xl">{title}</h2>
        <p>
          Our {title} from {categoryName ? categoryName : "random"} categories.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 container mx-auto mt-10">
        {products?.slice(0, 6).map((product) => (
          <Link key={product.id} href={`/product/${product.category}/${product.id}`}>
            <div className="card bg-slate-50 hover:bg-white shadow border group hover:shadow-lg  p-2 transition duration-300 ease-in-out">
              <div className="h-[300px] overflow-hidden transition duration-300 rounded-xl">
                <img
                  src={product.image}
                  alt={product.productName}
                  className="w-full h-full object-fill object-center group-hover:scale-110 transition duration-300 ease-in-out"
                />
              </div>
              <div className="card-body">
                <div className="badge badge-secondary">{product.category}</div>
                <h2 className="card-title">{product.productName.slice(0, 30)}...</h2>

                <div className="card-actions mt-2">
                  <div className="badge badge-outline">Status: {product.status.toString()}</div>
                  <div className="badge badge-outline">Rating: {product.averageRating}</div>
                </div>
                <div>
                  {/* <Link href={`/product/${encodeURIComponent(product.id)}`}>
                  <a className='btn btn-primary'>View Details</a>
                </Link> */}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FeaturedCard;
