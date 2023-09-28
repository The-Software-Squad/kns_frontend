import ProductsGrid from "@/components/ProductsGrid/productsGrid";

export default function LatestPlants({ allProducts }) {
  return (
    <div className="bg-gray-100 pb-10">
      <h1 className="text-center text-2xl pt-10 text-orange-900 font-bold">
      Latest Plants
      </h1>
      <ProductsGrid allProducts={allProducts} />
    </div>
  );
}
