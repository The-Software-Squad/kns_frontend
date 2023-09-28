import { useContext } from "react";
import { CartContext } from "../CartContext";

export default function ProductBox({ product }) {
  const {addProduct} = useContext(CartContext)
  const url = '/product/' + product._id 

  return (
    <div key={product._id} className="w-[75vw] pt-0 md:w-[30vw] lg:w-[20vw] bg-white flex flex-col rounded-lg md:p-2 lg:p-3">
       <a href={url} className="flex justify-center"><img src={product.heroImg} className="object-cover rounded-lg  w-full pt-0 h-[45vw] md:h-[15vw] " /></a>
      <div className="px-7 md:px-1 lg:px-2 py-5">
        <h2><a href={url}>{product.title}</a></h2>
        <div className="flex items-center justify-between pt-4">
          <p>{product.price}/-</p>
          <p className="cursor-pointer flex items-center gap-2 md:gap-1 lg:gap-2 bg-gray-200 px-3 rounded-md" onClick={() => addProduct(product._id)}> Add to cart<span className="material-symbols-rounded cursor-pointer text-3xl">
            shopping_cart
          </span></p>
        </div>
      </div>
    </div>
  );
}
