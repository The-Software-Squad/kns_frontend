import ProductBox from "./productBox";
export default function ProductsGrid({ allProducts }) {
  return (
    <div className="grid m-[5vw] md:grid-cols-3 gap-4 justify-items-center items-center">
      {allProducts?.length > 0 &&
        allProducts.map((product) => (
          <ProductBox key={product._id} product={product} />
        ))}
    </div>
  );
}
