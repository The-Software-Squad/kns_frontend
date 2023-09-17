export default function ProductBox({ product }) {
  return (
    <div key={product._id} className="w-[75vw] pt-4 md:w-[30vw] lg:w-[20vw] bg-white flex flex-col rounded-lg md:p-2 lg:p-3">
      <img src={product.heroImg} className="h-[25vw] md:h-[10vw] object-contain justify-self-center" />
      <div className="px-7 md:px-1 lg:px-2 py-5">
        <h2>{product.title}</h2>
        <div className="flex items-center justify-between pt-4">
          <p>{product.price}/-</p>
          <p className="flex items-center gap-2 md:gap-1 lg:gap-2 bg-gray-200 px-3 rounded-md"> Add to cart<span className="material-symbols-rounded cursor-pointer text-3xl">
            shopping_cart
          </span></p>
        </div>
      </div>
    </div>
  );
}
