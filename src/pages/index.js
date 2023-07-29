import Categories from "@/components/Categories";
import FeaturedCard from "@/components/FeaturedCard";
import Hero from "@/components/Hero";

export default function Home({ products }) {
  return (
    <main>
      <header>
        <Hero />
      </header>
      <FeaturedCard products={products} title="Featured Products" />
      <Categories products={products} />
    </main>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://pc-builder-json.vercel.app/products");
  const products = await res.json();
  return {
    props: {
      products: products,
    },
  };
}
