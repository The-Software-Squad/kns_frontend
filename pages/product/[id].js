import { CartContext } from "@/components/CartContext";
import Navbar from "@/components/Navbar/navbar";
import { mongooseConnect } from "@/lib/mogooseConnect";
import { Product } from "@/models/Product";
import { useContext, useState } from "react";

export default function ProductPage({ product }) {
    
    const [activeImg, setActiveImg] = useState(product.heroImg);
    const{addProduct} = useContext(CartContext)

    function handleActiveImg(img){
        setActiveImg(img)
    }

    const images =  product.images.map((img,i)=>{
        return <img src={img} key={i}
        className="w-[5vw] cursor-pointer object-contain"
        onClick={() => handleActiveImg(img)}
        alt={product.title}/>
    })

    return (
    <>
      <Navbar />
      <div className="grid grid-cols-2 py-[4vw]">
        <div className="justify-self-center">
          <img src={activeImg} />
          <div className="flex gap-4 pt-5">
            {images}
          </div>
        </div>
        <div>
          <h1 className="text-3xl font-bold">{product.title}</h1>
          <p className="">{product.description}</p>
          <h5 className="text-2xl font-bold text-green-600">Rs.{product.price}/-</h5>
          <p className="cursor-pointer mt-2 flex items-center w-fit gap-2 md:gap-1 lg:gap-2 bg-gray-200 px-3 rounded-md" onClick={() => addProduct(product._id)}> Add to cart<span className="material-symbols-rounded cursor-pointer text-3xl">
            shopping_cart
          </span></p>
        </div>
      </div>
    </>
  );
}
export async function getServerSideProps(context) {
  await mongooseConnect();
  const { id } = context.query;
  const product = await Product.findById(id);
  return {
    props: {
      product: JSON.parse(JSON.stringify(product)),
    },
  };
}
