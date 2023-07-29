import ProductDetails from "@/components/ProductDetails";
import { useRouter } from "next/router";
import React from "react";

const ProductDetailPage = ({ products }) => {
  const router = useRouter();

  return (
    <div className="mb-20 container mx-auto">
      <ProductDetails products={products} category={router.query.category} />
    </div>
  );
};

export default ProductDetailPage;

export const getStaticPaths = async () => {
  const res = await fetch("https://pc-builder-json.vercel.app/api/products");
  const products = await res.json();
  const paths = products.map((product) => ({
    params: { category: product.category, id: product.id.toString() },
  }));
  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
  const res = await fetch(`https://pc-builder-json.vercel.app/products?category=${params.category}&id=${params.id}`);
  const products = await res.json();

  return {
    props: {
      products,
    },
  };
};
