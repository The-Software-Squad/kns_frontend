import Hero from "@/components/Hero/hero";
import Navbar from "@/components/Navbar/navbar";
import { mongooseConnect } from "@/lib/mogooseConnect";
import { Product } from "@/models/Product";
import LatestPlants from "@/components/latestplants/Latestplants";
import Categories from "@/components/categories/categories";
import { Category } from "@/models/Category";
import Footer from "@/components/footer/footer";

export default function Home({ allProducts, categories }) {
  return (
    <div>
      <Navbar />
      <Hero />
      <Categories categories={categories} />
      <LatestPlants allProducts={allProducts} />
      <Footer />
    </div>
  );
}

export async function getServerSideProps() {
  await mongooseConnect();
  const allProducts = await Product.find({}, null, { sort: { _id: -1 } });
  const categoryIds = await Product.distinct("category");
  const categories = await Category.find({ _id: categoryIds });
  return {
    props: {
      allProducts: JSON.parse(JSON.stringify(allProducts)),
      categories: JSON.parse(JSON.stringify(categories)),
    },
  };
}
