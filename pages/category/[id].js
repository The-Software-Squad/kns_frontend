import { CartContext } from "@/components/CartContext";
import Navbar from "@/components/Navbar/navbar";
import ProductsGrid from "@/components/ProductsGrid/productsGrid";
import { mongooseConnect } from "@/lib/mogooseConnect";
import { Category } from "@/models/Category";
import { Product } from "@/models/Product";
import { useContext, useState } from "react";

export default function CategoryPage({ products,categoryName }) {
    return (
    <>
      <Navbar />
      <h1 className="text-center text-2xl py-10 text-orange-900 font-bold">
        {categoryName}
      </h1>
      <ProductsGrid allProducts={products} />
    </>
  );
}
export async function getServerSideProps(context) {
  await mongooseConnect();
  const { id } = context.query;
  const products = await Product.find({category:id});
  const category = await Category.findById(id);
  const name = category.name
  
  return {
    props: {
      categoryName: JSON.parse(JSON.stringify(name)),
      products: JSON.parse(JSON.stringify(products)),
    },
  };
}
