import Hero from "@/components/Hero/hero";
import Navbar from "@/components/Navbar/navbar";
import { mongooseConnect } from "@/lib/mogooseConnect";
import { Product } from "@/models/Product";
import ProductsGrid from "@/components/ProductsGrid/productsGrid";

export default function Home({allProducts}) {
  return (
    <div>
      <Navbar />
      <Hero/>
      <ProductsGrid allProducts={allProducts}/>
    </div>
  )
}

export async function getServerSideProps(){
  await mongooseConnect();
  const allProducts = await Product.find({}, null, {sort: {'_id': -1}, limit: 10});
  return {
    props: {allProducts: JSON.parse(JSON.stringify(allProducts))},
  }
}