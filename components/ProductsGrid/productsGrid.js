import ProductBox from "./productBox";

export default function ProductsGrid({allProducts}) {
    
    return (
        <div className="bg-gray-100 pb-10">
            <h1 className="text-center text-2xl py-10 text-orange-900 font-bold">Bestseller Plants</h1>
            <div className="grid md:grid-cols-3 gap-4 justify-items-center items-center">
                {allProducts?.length > 0 && allProducts.map((product) => (
                    <ProductBox product={product}/>
                ))}
            </div>
        </div>
    )
}